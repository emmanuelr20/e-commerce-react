import React, { Component } from "react";
import withContext from "../withContext";

const initState = {
  name: "",
  price: "",
  stock: "",
  shortDesc: "",
  description: ""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = e => {
    e.preventDefault();
    const { name, price, stock, shortDesc, description } = this.state;
    if (name && price) {
      this.props.context.addProduct(
        {
          name,
          price,
          shortDesc,
          description,
          stock: stock || 0
        },
        () => this.setState(initState)
      );
    } else {
      this.setState({ error: "Please Enter name and price" });
    }
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, price, stock, shortDesc, description } = this.state;
    return (
      <div className="add-product">
        <h4 className="title">Add Product</h4>
        <form>
          <div className="form-field">
            <label>Product Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Price: </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Available in Stock: </label>
            <input
              type="number"
              name="stock"
              value={stock}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label>Short Description: </label>
            <input
              type="text"
              name="shortDesc"
              value={shortDesc}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label>Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          {this.state.error && <div className="error">{this.state.error}</div>}
          <div className="form-field">
            <button type="submit" onClick={this.save}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withContext(AddProduct);
