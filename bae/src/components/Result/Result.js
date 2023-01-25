import React from "react";
import "../../App.css";
import data from "../../lib/data.js";

// replace the [number] with the return of the input submission

function Result() {
  console.log(data);
  return (
    <div className="card">
      <header>
        <h1>{data[0].food}</h1>
      </header>
      <img src={data[0].image} alt="food picture" />
      <div className="content">
        <p> {data[0].description}</p>
      </div>
      <div>
        <h1>Score: {data[0].carbonScore}</h1>
      </div>
    </div>
  );
}

export default Result;
