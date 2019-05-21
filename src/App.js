import React, { Component } from "react";
import Console from "./components/Console";
import Details from "./components/Details";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Header label="BP AD" />
              <Switch>
                <Route exact path="/" component={Console} />
                <Route exact path="/details/:flux" component={Details} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
