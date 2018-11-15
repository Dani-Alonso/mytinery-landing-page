import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
//Router
import Login from "./Login.js";
import Account from "./Account.js";
import Error from "./Error.js";
import Cities from "./Cities.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Body} exact />
            <Route path="/Login" component={Login} />
            <Route path="/Account" component={Account} />
            <Route path="/Cities" component={Cities} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
