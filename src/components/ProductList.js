import React, { Component } from 'react';

export class ProductList extends Component {
	render() {
		const {products} this.props;
		return (
			<div class="products-wrapper">
				<h4>Our Products</h4>
				<div class="product-list">
					{
						products.map((product, index) => (
							<Product 
								product={product}
								key={index}
							/>
						))
					}
				</div>
			</div>
		);
	}
}
