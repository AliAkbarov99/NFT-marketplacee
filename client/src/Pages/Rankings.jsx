import React from 'react'
import './CSS/Rankings.css'

const Rankings = () => {
  return (
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
        </div>
      </div>

      <div className='creators__table__cards'>

      </div>
    </div>
    </div>

  </div>
  )
}

export default Rankings