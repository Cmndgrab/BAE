
import React from "react";
import "../../App.css";
import data from "../../lib/data.js";

// replace the [number] with the return of the input submission

function Result(props) {
  console.log(data);
  return (
    <div className="card">
      <header>
        <h1>{props.food}</h1>
      </header>
      <img src={props.image} alt="food picture" />
      <div className="content">
        <p> {props.description}</p>
      </div>
      <div>
        <h1>Score: {props.carbonScore}</h1>
      </div>
    </div>
  );
}

export default Result;
