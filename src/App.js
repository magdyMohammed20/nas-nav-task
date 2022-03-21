import React from 'react'
import './style/global.scss'
import UpperHeader from "./components/upperHeader/UpperHeader";
import MiddleHeader from "./components/middleHeader/MiddleHeader";
import LastHeader from './components/lastHeader/LastHeader';
import BreadCramb from './components/breadcramb/BreadCramb';
import MainProduct from './components/MainProduct/MainProduct';
import SimilarProducts from './components/SimilarProducts/SimilarProducts';
import Footer from './components/footer/Footer';
import LastFooter from './components/lastFooter/LastFooter';
import data from './services/firstProduct'
import Cart from './components/cart/Cart';
class App extends React.Component {

  // firstProduct: Is The Main Fetched Product From  The API
  // totalQuan: Is Total Cart Item Quantity
  // quantity: As Accmulator For Quantity
  // cart: Array To Store Fetched Products Data In It
  // addToCartBtn: For Toggle The Cart
  // isRemove : Accmulator For Check If Product Removed From Cart Or Not
  state = {
    firstProduct: {},
    totalQuan: 0,
    quantity: 1,
    cart: [],
    addToCartBtn: false,
    isRemove: false
  }


  async componentDidMount() {
    // Aysnc Loading Main Product Data
    await data.then(firstPro => this.setState({ firstProduct: firstPro }))
  }

  // When Click On Increment Quantity Button Will Increase Quantity By 1
  incrementQuantity = () => {
    this.setState({ ...this.state, quantity: this.state.quantity + 1 })
  }

  // When Click On Decrement Quantity Button Will Decrease Quantity By 1
  decrementQuantity = () => {

    // Decrement Quantity When Not Equal To 0
    if (this.state.quantity !== 0) {
      this.setState({ ...this.state, quantity: this.state.quantity - 1 })
    }

    // If Quantity Will Be 0 Set It To 1
    if (this.state.quantity === 1) {
      this.setState({ quantity: 1 })
    }
  }

  // When Click Add To Cart Button Will Add The Product To The Cart  
  addToCart = (product) => {

    // If The Quantity Greater Than 0 Execute Functionality Of Add To Cart
    if (this.state.quantity > 0) {

      // Check If Product Already In The Cart
      const found = this.state.cart.some(el => el.id == product.id);

      // If Product Not In Cart Will Add To Cart
      if (!found) {
        this.setState({ ...this.state, cart: [...this.state.cart, product], totalQuan: this.state.totalQuan += this.state.quantity, quantity: 1 })
      }

      // Else Will Increment The Product Quantity
      else {
        this.setState({ ...this.state, totalQuan: this.state.totalQuan += this.state.quantity, quantity: 1 })
      }
    }

  }

  // When Click On Remove From Cart Button Will Remove Product From The Cart Using It's (id)
  removeFromCart = (id) => {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(item => item.id !== id),
      quantity: 1,
      totalQuan: 0,
      isRemove: true
    })
  }

  // When Click On Close Cart Button Will Close The Opened Cart
  closeCart = () => {
    this.setState({ ...this.state, addToCartBtn: false })
  }

  // When Click On Cart Icon Will Toggle It
  toggleCart = () => {
    this.setState({ ...this.state, addToCartBtn: true })
  }



  render() {
    return (
      <div className="App">
        <UpperHeader />
        <MiddleHeader quantity={this.state.totalQuan} isRemove={this.state.isRemove} addToCartBtn={this.state.addToCartBtn} toggleCart={this.toggleCart} />
        <LastHeader />
        <BreadCramb />
        <MainProduct state={this.state} firstProduct={this.state.firstProduct} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} addToCart={this.addToCart} />
        <SimilarProducts />

        <Footer />
        <LastFooter />
        {
          this.state.addToCartBtn && <Cart cart={this.state.cart} quantity={this.state.totalQuan} removeFromCart={this.removeFromCart} closeCart={this.closeCart} />
        }
      </div>
    );
  }
}

export default App;
