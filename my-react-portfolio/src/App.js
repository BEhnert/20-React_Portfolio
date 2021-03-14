import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
// import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./components/style.css"

function App() {
  return (
    <div>
       
        <Router>
          <Switch>
       
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route exact path="/projects">
            <Projects />
          </Route>
          {/* <Route exact path="/resume" component={Resume} /> */}
          <Route exact path="/20-react_portfolio/resume">
            <Resume />
          </Route>
          <Route exact path="/20-react_portfolio">
            <Home />
          </Route>
          </Switch>
          </Router>
        
        <Footer />
    </div>
  );
}

export default App;
