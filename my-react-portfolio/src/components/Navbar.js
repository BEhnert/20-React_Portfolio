import React from "react";
import "./style.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar">

            <a href="/my_react_portfolio">
                <button style={{ backgroundColor: "rgb(32, 32, 212)" }} 
                className="btn btn-dark no-border rounded-pill">Home 1</button>
                  </a>

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

                <a href="/my_react_portfolio/resume">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
              Resume</button>
                </a>

                <a href="/my_react_portfolio/projects">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">
          Projects</button>
                </a>
            </nav>

        </div>

    )
};

export default NavBar;