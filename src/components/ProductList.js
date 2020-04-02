import React, { Component } from "react";
import Product from "./Product";
import withContext from "../withContext";

class ProductList extends Component {
  render() {
    const { products } = this.props.context;
    return (
      <div className="products-wrapper">
        <h4 className="title">Our Products</h4>
        <div className="product-list">
          {products &&
            products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default withContext(ProductList);
