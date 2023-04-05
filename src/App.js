import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import OrdersPage from "./OrdersPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/orders" component={OrdersPage} />
      </Switch>
    </Router>
  );
}

export default App;
