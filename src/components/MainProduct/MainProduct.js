import React from 'react'
import './main.scss'

export default class MainProduct extends React.Component {

    addCart() {
        this.props.addToCart(this.props.firstProduct)
    }

    incrementQuantity() {
        this.props.incrementQuantity()
    }

    decrementQuantity() {
        this.props.decrementQuantity()
    }



    render() {


        return (
            <div className='main-section container d-flex my-3'>
                {this.props.state?.firstProduct?.imgs && (
                    <div>
                        <div>
                            <img className='w-100' src={"/nas-nav-task/" + this.props.state.firstProduct.imgs.firstImg} />
                        </div>
                        <div className='d-flex other-imgs'>
                            <div className='d-flex align-items-center'>
                                <img src='/nas-nav-task/images/upperHeader/chev-left.png' />
                            </div>
                            <div>
                                <img src={'/nas-nav-task/' + this.props.state.firstProduct.imgs.secondImg} />
                            </div>
                            <div>
                                <img src={"/nas-nav-task/" + this.props.state.firstProduct.imgs.thirdImg} />
                            </div>
                            <div>
                                <img src={"/nas-nav-task/" + this.props.state.firstProduct.imgs.fourthImg} />
                            </div>
                            <div>
                                <img src={"/nas-nav-task/" + this.props.state.firstProduct.imgs.fifthImg} />
                            </div>
                            <div className='d-flex align-items-center'>
                                <img src='/nas-nav-task/images/upperHeader/chev-right.png' />
                            </div>
                        </div>
                    </div>
                )}



                <div className='main-product-details'>
                    {this.props.state?.firstProduct && (
                        <div>
                            <img src='/nas-nav-task/images/middleHeader/adidas.png' />

                            <h3 className='my-3'>
                                {this.props.state.firstProduct.title}
                            </h3>
                            <p className='my-3'>
                                {this.props.state.firstProduct.type}
                            </p>

                            <div className='d-flex justify-content-between'>
                                <ul className='list-unstyled d-flex'>
                                    <li><img src='/nas-nav-task/images/rating/star2.svg' /></li>
                                    <li><img src='/nas-nav-task/images/rating/star2.svg' /></li>
                                    <li><img src='/nas-nav-task/images/rating/star2.svg' /></li>
                                    <li><img src='/nas-nav-task/images/rating/star2.svg' /></li>
                                    <li><img src='/nas-nav-task/images/rating/star1.svg' /></li>
                                </ul>
                                <div className='font-weight-bold'>
                                    {this.props.state.firstProduct.totalRate} Of 5
                                </div>
                                <div>
                                    {this.props.state.firstProduct.totalUserRate} Rates
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-between my-3'>
                                <h1 className='price'>{this.props.state.firstProduct.price} LE</h1>

                                <del className='disabled-price'>{this.props.state.firstProduct.price} LE</del>

                                <span className='discount'>{this.props.state.firstProduct.discount} % off</span>
                            </div>
                            <hr />
                            <div className='sizes my-3'>
                                <h2>Size</h2>
                                <ul className='d-flex list-unstyled'>
                                    <li><a>Small</a></li>
                                    <li><a>Medium</a></li>
                                    <li><a className='active'>Large</a></li>
                                    <li><a>X large</a></li>
                                    <li><a>XX Large</a></li>
                                </ul>
                            </div>
                            <hr />
                            <div className='colors my-3'>
                                <h2>Color</h2>
                                <div className='d-flex'>
                                    <div className='active'>
                                        <img src='/nas-nav-task/images/colors/6.png' />
                                    </div>
                                    <div>
                                        <img src='/nas-nav-task/images/colors/7.png' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='quantity'>
                                <h2>Quantity</h2>
                                <div className='quantity-container'>

                                    <button onClick={() => this.decrementQuantity()}><img src='/nas-nav-task/images/quantity/minus.svg' /></button>
                                    <span>{this.props.state.quantity}</span>
                                    <button onClick={() => this.incrementQuantity()}><img src='/nas-nav-task/images/quantity/plus.svg' /></button>
                                </div>

                                <div className='d-flex add-to-cart-container'>
                                    <button onClick={() => this.addCart()}>Add To Cart</button>
                                    <button>Pick From Store</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>





            </div>
        )

    }




}
