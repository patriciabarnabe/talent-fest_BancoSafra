import React from 'react'
import './card.css'

function Card({imageUrl}) {
    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-title'>
            </div>
            
        </div>
    )
}

export default Card