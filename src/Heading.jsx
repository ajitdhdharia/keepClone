import React from "react";

function Heading() {
    let time = new Date(2021, 1, 1, 9);
    let currentTime = time.getHours();
    console.log(currentTime);
    let heading = "";
    let customStyle = {
      color: "",
    };
  
    if (currentTime >= 0 && currentTime <= 12) {
      heading = "Good Morning";
      customStyle.color = "red";
    } else if (currentTime > 12 && currentTime <= 18) {
      heading = "Good Afternoon";
      customStyle.color = "green";
    } else {
      heading = "Good Evening";
      customStyle.color = "blue";
    }
  
    return <h1 style={customStyle}> {heading} </h1>;
  }

  export default Heading;