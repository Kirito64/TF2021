import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

// importing pages
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Events from "./Pages/events/Events";
import Calendar from "./Pages/calendar/Calendar"
import Footer from "./Components/footer/Footer";
import { Spring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <>
      <Router>
        <div className="app-container">
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
            <Route path="/calendar">
              <Spring
                from={{ transform: "scale(0)", opacity: 0 }}
                to={{ transform: "scale(1)", opacity: 1 }}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <Calendar></Calendar>
                  </animated.div>
                )}
              </Spring>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
