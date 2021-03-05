import React from "react";

let date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear);

function Footer() {
  let footer = (
    <footer>
      <p>copyright © {currentYear}</p>
    </footer>
  );
  return footer;
}

export default Footer;
