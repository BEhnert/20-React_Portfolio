import React from "react";
import Link from "react-router-dom"
import "./style.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar">

            <Link to="/">
                <button style={{ backgroundColor: "rgb(32, 32, 212)" }} 
                className="btn btn-dark no-border rounded-pill">Home 4</button>
            </Link>

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

                <Link to="/resume">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
              Resume 2</button>
                </Link>

                <Link to="/my_react_portfolio/projects">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
          Projects</button>
                </Link>
            </nav>

        </div>

    )
};

export default NavBar;