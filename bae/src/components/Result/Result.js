import React from "react";
import "../../App.css";
// import 'data' from '../'

function Result() {
  return (
    <article class="card">
      <header>
        <h2>Banana</h2>
      </header>
      <img
        src="https://en.wikipedia.org/wiki/Banana_equivalent_dose#/media/File:Banana-Single.jpg"
        alt="Hot air balloons"
      />
      <div class="content">
        <p>
          {" "}
          480g CO2e per kilo. Bananas are a great food for anyone who cares
          about their carbon footprint. For just 80g of CO2e you get a whole lot
          of nutrition: 140 calories as well as stacks of vitamin C, vitamin B6,
          potassium and dietary fibre. All in all, a fantastic component of a
          low-carbon diet{" "}
        </p>
      </div>
      <div>
        <h1>Score: 2</h1>
      </div>
    </article>
  );
}

export default Result;
