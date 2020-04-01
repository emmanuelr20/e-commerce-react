import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3></h3>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Home} />
        <Route exact path="/cart" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
