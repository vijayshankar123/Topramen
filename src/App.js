import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Restaurant from "./components/Restaurant";
import { getRestaurants } from "./actions/restaurantAction";

//redux

import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(getRestaurants());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/resto" component={Restaurant} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
