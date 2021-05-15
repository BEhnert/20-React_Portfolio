import React from "react";
// import NavBar from "./Navbar"
import './style.css';
import FWAdv from './Images/FairWeather_Adventures.png'
import HouseOpt from './Images/Household_Optimizer.png'
import WeatherDash from './Images/Weather_Dashboard.png'
import CodeQuiz from './Images/Coding_Quiz.png'
import DayPlan from './Images/Day_Planner.png'
import TCFood from './Images/TC_Food_Share.png'

function Projects() {
    return (
        <div>
            <div className="Projects">
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap" rel="stylesheet"></link>

                <title>Brock Ehnert</title>

                <body>
                    {/* <NavBar /> */}
                    {/* <div className="col-md-10 m-auto"> */}
                    {/* <div className="jumbotron" style={{ background: "rgba(171, 196, 206, 0.85)" }}> */}
                    <div className="container-fluid">
                        <h1>Brock's Projects</h1>
                        <div className="container">
                            <div className="row"  style={{margin:'25px'}}>
                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={FWAdv} alt="FairWeather Adventures">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">FairWeather_Adventures</h5>
                                            <p className="card-text">Built for short notice travelers seeking National Park information including
                                            the current weather and 5-day forecast. The app integrates data
                                            received from multiple server-side API requests including the Open Weather Map API and National Park Services API</p>
                                            <a href="https://behnert.github.io/Fairweather_Adventures/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Fairweather-Adventures" className="btn btn-primary">Github</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={HouseOpt} alt="Household Optimizer">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">Household Optimizer</h5>
                                            <p className="card-text">Simple application that allows users keep track of essentials in their household. This app was made using NodeJS, Express, Handlebars, Sequelize ORM with MySQL Dialect, Passport package with Local Strategy, Jquery Ajax requests, Bootstrap CSS Library, and custom CSS stylings.</p>
                                            <a href="https://vast-mesa-04959.herokuapp.com/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Household_Optimizer" className="btn btn-primary">Github</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={TCFood} alt="Twin Cities Food Share">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">Twin Cities Food Share</h5>
                                            <p className="card-text">Application to allow easy sharing of food supplies in the Twin Cities<br></br>
                                        As a user:
I want to find free meals, produce, and groceries near me so that I can have access to food in the Twin Cities.

As a Registered User
I can drop a pin for the product's: Location Date Quantity I can delete the pin from the map when the product is not available anymore</p>
                                            <a href="https://tc-food-share.herokuapp.com/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Twin_Cities_Food_Share" className="btn btn-primary">GitHub</a>

                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row" style={{margin:'25px'}}>
                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={CodeQuiz} alt="FairWeather Adventures">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">Coding Quiz</h5>
                                            <p className="card-text">This app is designed to be a timed code quiz where user is able to select from multiple choice answers. After getting through the quiz, the user score will be displayed according to how many correct/incorrect answers they gave during the 60 second quiz. At that time, they can then enter initials and submit to store their score in the high scores.</p>
                                            <a href="https://behnert.github.io/Coding_Quiz/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Coding_Quiz" className="btn btn-primary">Github</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={DayPlan} alt="Household Optimizer">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">Day Planner</h5>
                                            <p className="card-text">Web application for current day's activities during business hours of 9-5pm local time.  This DayPlanner will allow user to save any activities by the hour in their daily routine.  The hour slots are also color-coded to show past, current, and future hours throughout the day.</p>
                                            <a href="https://behnert.github.io/Day_Planner/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Day_Planner" className="btn btn-primary">Github</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex justify-context-center">
                                    <div className="card" style={{ width: '24rem' }}>
                                        <img className="card-img-top" src={WeatherDash} alt="FairWeather Adventures">
                                        </img>
                                        <div className="card-body" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                                            <h5 className="card-title">Weather Dashboard</h5>
                                            <p className="card-text">This application will allow users to search US Cities for current weather, including 5-day forecast showing temperature, wind speed, humidity, and a UV Index. As they search, the list of Cities will grow and become a list of easy access links to bring up previously searched cities. A refresh of the page will bring up the last searched city's weather information.</p>
                                            <a href="https://behnert.github.io/Weather_Dashboard/" className="btn btn-primary">Demo</a>
                                            <a href="https://github.com/BEhnert/Weather_Dashboard" className="btn btn-primary">GitHub</a>

                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                           </div>
                    </div>
                </body>
            </div>
        </div>


    );
}

export default Projects;


