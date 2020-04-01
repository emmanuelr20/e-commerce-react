import React, { Component } from 'react';

const initState = {
	name: "",
	price: "",
	stock: 0,
	shortDesc: "",
	Description: ""
};

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = initState
	}

	save() {
		localStorage.getItem("AllProducts", allProducts => {
			allProducts = allProducts || [];
			allProducts.push(this.state)
			this.setState(initState);
			localStorage.setItem("AllProducts", allProducts)
		})
	}

	handleChange = e => this.setState({[e.target.name]: e.target.value})

	render() {
		return (
			<div className="add-product">
				<h2 className="title">Add Product</h2>
				<div className="form-field">
					<label>Product Name: </label>
					<input type="text" name="name"  onChange={this.handleChange}/>
				</div>
				<div className="form-field">
					<label>Price: </label>
					<input type="number" name="price" onChange={this.handleChange}/>
				</div>
				<div className="form-field">
					<label>Available in Stock: </label>
					<input type="number" name="stock" onChange={this.handleChange}/>
				</div>
				<div className="form-field">
					<label>Short Description: </label>
					<input type="text" name="shortDesc" onChange={this.handleChange}/>
				</div>
				<div className="form-field">
					<label>Description: </label>
					<input type="text" name="description" onChange={this.handleChange}/>
				</div>
				<div className="form-field">
					<button>Submit</button>
				</div>
			</div>
		);
	}
}
