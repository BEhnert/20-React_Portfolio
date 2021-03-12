import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Views/Home"
import Projects from "./components/Views/Projects"
import Resume from "./components/Views/Resume"
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./components/Views/style.css"

function App() {
  return (
    <div>
      <Router>
        <NavBar />  
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/20-react_portfolio" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/20-react_portfolio/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/20-react_portfolio//resume" component={Resume} />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
