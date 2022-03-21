import React from 'react'

function ProductCard({ product }) {
    return (
        <div className='card'>
            <div>
                <div>
                    <img src={product.img} className='w-100' />
                </div>
                <div className='card-body'>
                    <h4>{product.title}</h4>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <div>
                            <h2>
                                {product.price} <small>LE</small>
                            </h2>
                            <div className='d-flex align-items-center justify-content-between my-3'>
                                <h4>
                                    <del className='disabled-price'>9,999  <small>LE</small></del>
                                </h4>
                                <span className='discount'>
                                    {product.discount} %
                                </span>
                            </div>
                        </div>
                        <img src='/images/middleHeader/adidas.png' />
                    </div>

                    <div className='d-flex justify-content-around align-items-center my-3'>
                        <ul className='list-unstyled d-flex'>
                            <li><img src='/images/rating/star2.svg' /></li>
                            <li><img src='/images/rating/star2.svg' /></li>
                            <li><img src='/images/rating/star2.svg' /></li>
                            <li><img src='/images/rating/star2.svg' /></li>
                            <li><img src='/images/rating/star1.svg' /></li>
                        </ul>
                        <div className='font-weight-bold'>
                            {product.totalRate} Of 5
                        </div>
                    </div>

                    <div className='my-3'>
                        {
                            product.pickup ? (<div className='d-flex justify-content-center'>Pickup From : {product.pickup}</div>) : (
                                <div className='d-flex justify-content-between'>
                                    <span>From : {product.from}</span>
                                    <span>To : {product.to}</span>

                                    <span>In : {product.in}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard