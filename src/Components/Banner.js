import React from 'react'

function Banner({ name, discount, link }) {
        return (
                <div className='banner-content'>
                        <h3>Hello, {name}</h3>
                        <p> Get free discount for every <span>${discount} </span>
                                purchase</p>
                        <a href={link}>Learn More</a>
                </div>
        )
}

export default Banner