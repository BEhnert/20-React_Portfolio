import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./style.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar">
            <Router>
            <Link to="/20-react_portfolio" onClick={() => window.location.reload()}>
                <button style={{ backgroundColor: "rgb(32, 32, 212)" }} 
                className="btn btn-dark no-border rounded-pill">Home</button>
            </Link>
            </Router>

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
                <Router>
                <Link to="/20-react_portfolio/resume" onClick={() => window.location.reload()}>
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
              Resume</button>
                </Link>
                </Router>
                <Router>
                <Link to="/20-react_portfolio/projects" onClick={() => window.location.reload()}>
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
          Projects</button>
                </Link>
                </Router>
            </nav>

        </div>

    )
};

export default NavBar;