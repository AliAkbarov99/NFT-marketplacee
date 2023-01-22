import React from 'react'
import './CSS/Marketplace.css'
import searchicon from '../Images/search-icon.png'
import NftCard from '../Components/NftCard/NftCard'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Marketplace = () => {
  const [nfts,setNfts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/nfts").then(res=>{
      setNfts(res.data)
    })
  },[])




  return (
    <div id='market'>
      <div className='market__browse'>
        <div className='container-sm'>
          <div>Browse Marketplace</div>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          <div className='market__browse__search'>
            <input type="text" placeholder='Search your favourite NFTs' />
            <img src={searchicon} alt="" />
          </div>
        </div>
      </div>
      <div className='market__nav'>
        <div className='container-sm'>
          <div className='market__nav__nfts'>
            <p>NFTs</p>
            <span>302</span>
          </div>
          <div className='market__nav__collections'>
            <p>Collections</p>
            <span>67</span>
          </div>
        </div>
      </div>
      <div className='market__nfts'>
        <div className='container-sm'>
          {nfts && nfts.map(nft=>{
            return <NftCard key={nft.id} name={nft.name} price={nft.price} highBid={nft.highestBid} artistId={nft.artist.artistId}/>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Marketplace