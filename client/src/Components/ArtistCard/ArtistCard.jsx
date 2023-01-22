import React from 'react'
import './ArtistCard.css'

const ArtistCard = ({rank, name, change, sold, volume}) => {
  return (
    <div id='artist__card'>
        <div className='artist__card__left'>
            <div className='artist__card__left__rank'>
              {rank}
            </div>
            <div className='artist__card__left__name'>
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-126@2x.png" alt="" />
            <h5>{name}</h5>
            </div>
        </div>

        <div className='artist__card__right'>
          <div className='artist__card__right__change'>
            +{change}%
          </div>
          <div className='artist__card__right__sold'>
            {sold}
          </div>
          <div className='artist__card__right__volume'>
            {volume} ETH
          </div>
          <div className='artist__card__right__add'>
            <button onClick={()=>{
              document.getElementById("custom__modal").style.visibility = "visible";
              document.getElementById("custom__modal").style.opacity = "1";

            }}>Add NFT</button>
          </div>



        </div>
    </div>
  )
}

export default ArtistCard