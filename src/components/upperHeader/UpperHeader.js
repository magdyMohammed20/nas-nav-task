import React from 'react'
import './upper.scss'

function UpperHeader() {
    return (
        <div className='upper-header container d-flex justify-content-around align-items-center'>
            <ul className='d-flex align-items-center list-unstyled'>
                <li className='d-flex'>
                    <img src='/images/upperHeader/humb.svg' />
                    <img src='/images/upperHeader/logo.png' className='logo' />
                </li>

                <li>
                    <img className='chev-left' src='/images/upperHeader/chev-left.png' />
                    <span>Valentine’s Day Offers! Buy Two Get One Free <a href='#' className='shownow'>Shop Now</a></span>

                    <img className='chev-right' src='/images/upperHeader/chev-right.png' />
                </li>
            </ul>

            <ul className='d-flex align-items-center list-unstyled'>
                <li>
                    <img src='/images/upperHeader/phone.png' />
                    <a>Contact Us</a>
                </li>

                <li>
                    <img src='/images/upperHeader/cart.png' />
                    <a>Track Order</a>
                </li>

                <li>
                    <img src='/images/upperHeader/location.png' />
                    <a>Find A Store</a>
                </li>
            </ul>
        </div>
    )
}

export default UpperHeader