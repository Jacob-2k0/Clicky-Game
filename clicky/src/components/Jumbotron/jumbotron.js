import React from "react";
import "./jumbotron.css";

const Jumbotron = props => {
    return (
        <header>
            <div className="status">
                <div className="statusText">Test Your Memory -- Don't click on the same image twice! *Click all 12 images to win!*</div>
            </div>
            <div className="jumbotron">
                <h1>{props.children}</h1>
                <hr></hr>
                <h3>Score: {props.score}</h3>
                <h3>High Score: {props.highscore}</h3>
            </div>
        </header>
    );
}

export default Jumbotron;