import React from 'react'
import './midle.scss'
class MiddleHeader extends React.Component {

    render() {
        return (
            <div className='middle-header container d-flex justify-content-around align-items-center'>
                <div className='form-group'>
                    <img src='/images/middleHeader/search.png' />
                    <input type='search' placeholder='Search' />
                </div>

                <div>
                    <img src='/images/middleHeader/adidas.png' />
                </div>

                <div>
                    <ul className='list-unstyled d-flex'>
                        <li className='d-flex align-items-center'>
                            <span className='cart-container' onClick={() => this.props.toggleCart()}>
                                <span className='cart-counter'>{this.props.quantity}</span>
                                <img src='/images/middleHeader/cart.png' />
                            </span>
                            <span>Cart</span>
                        </li>

                        <li className='d-flex align-items-center'>
                            <img src='/images/middleHeader/fav.png' />
                            <span>Wishlist</span>
                        </li>

                        <li className='d-flex align-items-center'>
                            <img src='/images/middleHeader/user.png' />
                            <span>Login</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MiddleHeader