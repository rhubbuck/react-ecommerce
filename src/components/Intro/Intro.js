import React from 'react';
import './Intro.css'

const Intro = () => {

    const handleClick = () => {
        window[`scrollTo`]({top:600, behavior:`smooth`})
    }
    
    return (   
        <div className='intro-wrapper'>
            <div className='intro-text'>
                <p className='intro-text-line1'>Handmade goods</p>
                <p className='intro-text-line2'>for all your pet's needs</p>
                <button className='intro-button' onClick={handleClick}>Shop Now</button>
            </div>
        </div>
    )
}

export default Intro
