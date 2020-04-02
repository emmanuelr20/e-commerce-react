import React, { Component } from "react";
import withContext from "../withContext";

class Cart extends Component {
  checkout = () => {};
  render() {
    const { cart } = this.props.context;
    return (
      <div className="cart">
        <h4 className="title">Cart</h4>
        {cart &&
          Object.keys(cart).map(key => (
            <div className="product-card">
              <h4>
                {cart[key].product.name} ${cart[key].product.price} (
                {cart[key].amount})
              </h4>
              <small>{cart[key].product.shortDesc}</small>
            </div>
          ))}

        <button className="btn" onClick={this.checkout}>
          Checkout
        </button>
      </div>
    );
  }
}

export default withContext(Cart);
