import React, { Component } from 'react';

export class Product extends Component {
	render() {
		const {product} =  this.props
		return (
			<div className="product-card">
				<h5>{product.name} - ${product.price}</h5>
				<div>{product.shortDesc}</div>
				<small>{ product.stock ? }</small>
				<button 
					onClick={() => this.props.context.addToCart(product)}
				>
					Add to Cart
				</button>
			</div>
		);
	}
}
