import React from 'react'
import Button from './Button';

function Banner() {
    return (
        <section className='herobanner'>
            <p> Create your Apps effectively <br /> using <span className='hero'>React JS</span> </p>
            <div className='btns'>
                <Button btn={'secondary-btn'} content={'Explore More'} />
                <Button btn={'primary-btn'} content={'Get Started'} />
            </div>
        </section>
    )
}

export default Banner;