import React, { Component } from 'react';

export class Cart extends Component {
	render() {
		const {cart} = this.props;
		return (
			<div className="cart">
				{
					cart.map(item => (
						<div className="cart-item">
							<span>
								<strong>{item.product.name}</strong>
								${item.product.price}({item.amount})
							</span>
						</div>
						)
					)
				}
			</div>
		);
	}
}
