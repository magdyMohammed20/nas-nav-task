import React from 'react'
import './cart.scss'

class Cart extends React.Component {

    render() {

        return (
            <div className='cart d-flex position-fixed'>
                <div className='inner-cart'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <button className='close' onClick={() => this.props.closeCart()}>x</button>
                    </div>

                    <h2 className='text-center'>My Cart</h2>


                    <h4>Cart Summary</h4>
                    {
                        this.props.cart.map(cartItem => <div key={cartItem.id} className='d-flex cart-item'>
                            <div className='cart-item-img'>
                                <img src={cartItem?.imgs?.firstImg} />
                            </div>
                            <div className='cart-item-desc'>
                                <h5>{cartItem.title}</h5>

                                <p className='quantity'>
                                    <span>Quantity: {this.props.quantity}</span>
                                </p>

                                <div className='d-flex justify-content-between'>
                                    <h3 className='price'>{cartItem.price} <small>LE</small></h3>
                                    <button className='remove' onClick={() => this.props.removeFromCart(cartItem.id)}>Remove</button>
                                </div>
                            </div>


                        </div>)
                    }

                </div>
            </div>
        )
    }
}

export default Cart