import React from "react";
// import NavBar from "./Navbar"
import './style.css';

function Resume() {
    return (
        <div>
            <div className="Resume">
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap" rel="stylesheet"></link>

                <title>Brock Ehnert</title>

                <body>
                    {/* <NavBar /> */}
                    <div class="col-md-12 m-auto">
                        <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQ2lNkI1VUFBkV8bVe75LkIy1kP1REDRrOlAD4qqAuarobht-LsgkdGyw0PnuotGkjRz4cR14CFhNI4/pub?embedded=true" width="800" height="880"></iframe>
                    </div>
                </body>
            </div>
        </div>

    );
}

export default Resume;