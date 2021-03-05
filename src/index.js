//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let time = new Date(2021, 1,1, 15);
let currentTime = time.getHours();
console.log(currentTime);
let heading = "";
let customStyle = {
  color: ""
};

if (currentTime >= 0 && currentTime <= 12) {
  heading = "Good Morning";
  customStyle.color = "red"
} else if (currentTime > 12 && currentTime <= 18) {
  heading = "Good Afternoon";
  customStyle.color = "green"
} else {
  heading = "Good Evening";
  customStyle.color = "blue"
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}> {heading} </h1>
  </div>,
  document.getElementById("root")
);
