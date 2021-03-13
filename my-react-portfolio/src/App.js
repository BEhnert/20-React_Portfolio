import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <NavBar />  
        <Router>
          <Switch>
          <Route exact path="/my_react_portfolio" component={Home} />
          {/* <Route exact path="/my_react_portfolio/" component={Home} /> */}
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/my_react_portfolio/projects" component={Projects} /> */}
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/my_react_portfolio/resume" component={Resume} /> */}
          </Switch>
          </Router>
        
        <Footer />
    </div>
  );
}

export default App;
