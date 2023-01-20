import React from 'react'
import './CSS/Marketplace.css'
import searchicon from '../Images/search-icon.png'

const Marketplace = () => {
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

    </div>
  )
}

export default Marketplace