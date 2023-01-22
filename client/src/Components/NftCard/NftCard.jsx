import React from 'react'
import './NftCard.css'
import nftImage from '../../Images/nft-image.png'

const NftCard = ({name, price, highBid, artistId}) => {
  return (
    <div id='nft__card'>
        <div className='nft__card__img'>
            <img src={nftImage} alt="" />
        </div>
        <div className='nft__card__content'>
        <div className='nft__card__name'>
            <h5>{name}</h5>
            <div>
                <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-126@2x.png" alt="" />
                <span>{artistId}</span>
            </div>
        </div>
        <div className='nft__card__properties'>
            <div>
                <span>Price</span>
                <h6>{price} ETH</h6>
            </div>
            <div>
                <span>Highest Bid</span>
                <h6>{highBid} wETH</h6>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default NftCard