import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage.js";
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Todo from "./pages/Todo-List";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutUs" component={AboutUS} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Todo-List" component={Todo} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
