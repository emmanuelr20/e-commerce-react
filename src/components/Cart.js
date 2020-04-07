import React, { Component } from "react";
import withContext from "../withContext";

class Cart extends Component {
  checkout = () => {};

  render() {
    const { cart } = this.props.context;
    const cartKeys = Object.keys(cart || {});
    return (
      <div className="cart">
        <h4 className="title">Cart</h4>
        {cartKeys.length ? (
          cartKeys.map(key => (
            <div className="product-card" key={key}>
              <h4>
                {cart[key].product.name} ${cart[key].product.price} (
                {cart[key].amount})
              </h4>
              <small>{cart[key].product.shortDesc}</small>
              <button onClick={() => this.props.context.removeFromCart(key)}>
                remove Cart
              </button>
            </div>
          ))
        ) : (
          <div className="empty">No item in cart!</div>
        )}

        <button
          style={{ background: "darkred", marginRight: "10px" }}
          onClick={this.props.context.clearCart}
        >
          Clear cart
        </button>
        <button onClick={this.checkout}>Checkout</button>
      </div>
    );
  }
}

export default withContext(Cart);
