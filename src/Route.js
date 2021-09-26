import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./products/products";
import contact from "./Form/contact";
import App from "./App.js";
const RootRouter = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/product" component={<Product/>} />
      <Route exact path="/contact" component={contact} />
    </Switch>
  </Router>
);

export default RootRouter;
