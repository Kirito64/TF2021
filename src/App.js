import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

// importing pages
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Events from "./Pages/events/Events";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
