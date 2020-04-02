import React, { Component } from "react";
import withContext from "../withContext";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <h5>
          {product.name} - ${product.price}
        </h5>
        <div>{product.shortDesc}</div>
        <small>
          {product.stock ? product.stock + " available" : "Out Of Stock"}
        </small>
        <button
          onClick={() =>
            this.props.context.addToCart({
              id: product.name,
              product,
              amount: 1
            })
          }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default withContext(Product);
