import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

// importing pages
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Events from "./Pages/events/Events";
// import Footer from "./Components/footer/Footer";

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
      {/* <Footer/> */}
    </>
  );
};

export default App;
