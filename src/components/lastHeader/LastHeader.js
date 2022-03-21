import React from 'react'
import './last.scss'

function LastHeader() {
    return (
        <div className='last-header container'>
            <ul className='list-unstyled d-flex justify-content-around align-items-center'>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>Unisex</a></li>
                <li><a href='#'>Kids</a></li>
                <li><a href='#'>Best Sellers</a></li>
                <li><a href='#'>New Arrivals</a></li>
                <li><a href='#'>Offers</a></li>
            </ul>
        </div>
    )
}

export default LastHeader