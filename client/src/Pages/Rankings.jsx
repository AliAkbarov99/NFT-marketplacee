import React from 'react'
import { useEffect } from 'react'
import ArtistCard from '../Components/ArtistCard/ArtistCard'
import './CSS/Rankings.css'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'

const Rankings = () => {
  const nameInp = useRef()
  const priceInp = useRef()
  const highestInp = useRef()
  const [artists, setArtists] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/artists").then(response => {
      setArtists(response.data)
      console.log(response.data);
    })
  }, [])

  let currentId;
  return (
    <>
      <div id='custom__modal'>
        <div className='custom__modal__form'>
          <div className='custom__modal__close' onClick={()=>{
            document.getElementById("custom__modal").style.visibility = "hidden";
            document.getElementById("custom__modal").style.opacity = "0";
          }}>X</div>
          <h3>Add NFT</h3>
          <input ref={nameInp} type="text" placeholder='name' />
          <input ref={priceInp} type="number" placeholder='price' />
          <input ref={highestInp} type="number" placeholder='highest bid' />
          <div className='custom__modal__form__btn'><button onClick={()=>{
            axios.post("http://localhost:8080/api/nfts",{
              name:nameInp.current.value,
              price:priceInp.current.value,
              highestBid:highestInp.current.value,
              artist:{
                artistId:currentId
              }
            })
          }}>Add</button></div>
        </div>
      </div>

      <div id='creators'>
        <div className='creators__top'>
          <div className='container-sm'>
            <div>Top Creators</div>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
        </div>

        <div className='creators__nav'>
          <div className='container-sm'>
            <div className='creators__nav__nfts'>
              <p>Today</p>
            </div>
            <div className='creators__nav__collections'>
              <p>Collections</p>
            </div>
            <div className='creators__nav__collections'>
              <p>This Week</p>
            </div>
            <div className='creators__nav__collections'>
              <p>All Time</p>
            </div>
          </div>
        </div>

        <div className='container-sm'>
          <div id='creators__table'>

            <div className='creators__table__header'>
              <div className='creators__table__header__left'>
                <div>#</div>
                <div>Artists</div>
              </div>

              <div className='creators__table__header__right'>
                <div>Change</div>
                <div>NFTs Sold</div>
                <div>Volume</div>
                <div>Add NFT</div>
              </div>
            </div>

            <div className='creators__table__cards'>
              {artists && artists.map(artist => {
                currentId = artist._id
                return <ArtistCard key={artist._id} rank={artist.rank} name={artist.name} change={artist.change} sold={artist.nftsSold} volume={artist.volume} />
              })}

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Rankings