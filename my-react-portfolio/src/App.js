import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
        <nav className="navbar">
                <nav>
            <Link to="/20-react_portfolio">
                <button style={{ backgroundColor: "rgb(32, 32, 212)" }} 
                className="btn btn-dark no-border rounded-pill">Home</button>
            </Link>
            </nav>
        
                <form action="https://www.linkedin.com/in/brockehnert/" method="get" target="_blank"
                    className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark  no-border  rounded-pill">Linkedin</button>
                </form>

                <form action="https://github.com/BEhnert" method="get" target="_blank" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark  no-border rounded-pill">Github</button>
                </form>

                <form action="https://mailto:behnert77@gmail.com" method="get" target="_top" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark no-border rounded-pill">Email</button>
                </form>
              
                    <nav>
                <Link to="/20-react_portfolio/resume">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
              Resume</button>
                </Link>
                </nav>
              
              
                <nav>
                <Link to="/20-react_portfolio/projects">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
          Projects</button>
                </Link>
                </nav>
              
            </nav>
          <Switch>
       
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route exact path="/20-react_portfolio/projects">
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
