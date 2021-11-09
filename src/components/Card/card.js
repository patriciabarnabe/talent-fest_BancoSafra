import React from 'react'
import './card.css'

function card({imageUrl}) {
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

export default card