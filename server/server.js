// bi3A8FulfZWxQuzI
const express = require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
const app = express()
const cors = require('cors')
app.use(cors()) 
let PORT = 8080
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => console.err(error))


const ArtistSchema = new mongoose.Schema({
    rank: Number,
    name: String,
    change: Number,
    nftsSold: Number,
    volume: Number,
    nfts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NFT",
        },
    ]
});

const NftSchema = new mongoose.Schema({
    name: String,
    price: Number,
    highestBid: Number,
    artist:{
        artistId: String
    }
})

const ArtistModel = mongoose.model("Artist", ArtistSchema)
const NftModel = mongoose.model("NFT", NftSchema)



const addArtistSchema = Joi.object({
    name: Joi.string().required(),
    change: Joi.number().required(),
    nftsSold: Joi.number().required(),
    volume: Joi.number().required()
})

const addNftSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    highestBid: Joi.number().required(),
    artist:{
        artistId: Joi.string()
    }
})





app.post("/api/artists", (req, res, next) => {
    let { error } = addArtistSchema.validate(req.body);
    if (!error) {
        next()
    }
    else {
        const { details } = error
        const message = details.map(i => i.message).join(",")
        res.status(422).json({ error: message })
    }
},
    async (req, res) => {
        ArtistModel.findOne({ name: req.body.name }, (error, artist) => {
            if (error) return res.status(500).send({ error })

            if (artist) return res.status(400).send({ message: "Artist already exist" })

            var query = ArtistModel.find();
            query.count(function (err, count) {
                if (err) console.log(err)
                
                const newArtist = new ArtistModel({
                    ...req.body,
                    rank: count+1
                })
    
                newArtist.save().then(() => res.send({ message: "Artist successfully created!", newArtist })).catch(error => res.status(500).send({ error }))
            });
        })
    }
)

app.get("/api/artists", (req, res) => {
    ArtistModel.find(null, "rank name change nftsSold volume nfts").populate("nfts").exec((error, data) => {
        if (error) return res.status(500).send({ error })
        res.send(data)
    })
})


app.post("/api/nfts/",(req,res,next)=>{
    let { error } = addNftSchema.validate(req.body);
    if (!error) {
        next()
    }
    else {
        const { details } = error
        const message = details.map(i => i.message).join(",")
        res.status(422).json({ error: message })
    }
},async (req,res)=>{

    const newNft = new NftModel ({
        ...req.body
    })

    await newNft.save()
    await ArtistModel.findByIdAndUpdate(req.body.artist.artistId,{
        $push:{
            nfts: newNft._id,
        },
    })
     res.send({ message: "NFT successfully created!", newNft })
},(error,data)=>{
    if(error) return res.status(500).send({error})

    res.send(data)
}

)

app.get("/api/nfts", (req, res) => {
    NftModel.find(null,).exec((error, data) => {
        if (error) return res.status(500).send({ error })
        res.send(data)
    })
})






app.listen(PORT, () => {
    console.log("Server running on " + PORT);
})