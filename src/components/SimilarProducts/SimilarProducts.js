import React, { lazy, Suspense } from 'react'
import './similar.scss'
import data from '../../services/similarProducts'

// Lazy Loaded Smilar Products Items 
const Pcard = lazy(() => import("./ProductCard"));

class SimilarProducts extends React.Component {

    state = {
        allProducts: [],
    }

    async componentDidMount() {
        await data.then(products => {
            products.shift()
            this.setState({ allProducts: products })

        })

    }
    render() {
        return (
            <Suspense fallback={<div>Loading....</div>}>
                <div className='similar container'>
                    <h1>Smilar Products</h1>
                    <p>You may like these products also</p>

                    {
                        this.state.allProducts && (
                            <div className='d-flex'>
                                {
                                    this.state.allProducts.map(product => <Pcard key={product.id} product={product} />)
                                }
                            </div>
                        )
                    }

                    <div className='progress'>
                        <div></div>
                    </div>
                </div>
            </Suspense>
        )
    }
}

export default SimilarProducts