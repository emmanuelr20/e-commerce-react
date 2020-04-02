import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import data from "./Data";
import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
  }
  login = (usn, pwd) => {
    let user = data.users.find(u => u.username === usn && u.password === pwd);
    if (user) {
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addProduct = product => {
    let products = this.state.products;
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    this.setState({ products });
  };

  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  componentDidMount() {
    let products = localStorage.getItem("products");
    let cart = localStorage.getItem("cart");
    let user = localStorage.getItem("user");
    products = products ? JSON.parse(products) : data.initProducts;
    cart = cart ? JSON.parse(cart) : {};
    user = user ? JSON.parse(user) : null;
    this.setState({ products, user, cart });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct
        }}
      >
        <Router>
          <div className="App">
            <header className="App-header">
              <div>
                <h3>E-Commerce</h3>
              </div>
              <div className="menu">
                <Link to="/products">products</Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product">Add Product</Link>
                )}
                <Link to="/cart">Cart</Link>
                {!this.state.user ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <span onClick={this.logout}>Logout</span>
                )}
              </div>
            </header>
            <div className="App-body">
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/add-product" component={AddProduct} />
                <Route exact path="/products" component={ProductList} />
              </Switch>
            </div>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
