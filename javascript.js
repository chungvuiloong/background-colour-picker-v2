let body = document.querySelector("body");

// Variable for color picker
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let buttons = document.querySelectorAll("button");

// Variables for directional arrows
let selectedValue = `to left`; // default value
let topLeft = document.querySelector("#topLeft");
let left = document.querySelector("#left");
let bottomLeft = document.querySelector("#bottomLeft");

let topRight = document.querySelector("#topRight");
let right = document.querySelector("#right");
let bottomRight = document.querySelector("#bottomRight");

let up = document.querySelector("#top");
let bottom = document.querySelector("#bottom");
let middle = document.querySelector("#random");
// let direction = document.querySelectorAll('button[name="direction"]');

const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);

  ////// Lefties
  topLeft.onclick = () => {
    selectedValue = topLeft.value;
    console.log(selectedValue); // works
  };

  left.onclick = () => {
    selectedValue = left.value;
    console.log(selectedValue); // works
  };

  bottomLeft.onclick = () => {
    selectedValue = bottomLeft.value;
    console.log(selectedValue); // works
  };

  /// Rigthies
  topRight.onclick = () => {
    selectedValue = topRight.value;
    console.log(selectedValue); // works
  };

  right.onclick = () => {
    selectedValue = right.value;
    console.log(selectedValue); // works
  };

  bottomRight.onclick = () => {
    selectedValue = bottomRight.value;
    console.log(selectedValue); // works
  };

  ///// Upsies and downsies
  up.onclick = () => {
    selectedValue = up.value;
    console.log(selectedValue); // works
  };

  bottom.onclick = () => {
    selectedValue = bottom.value;
    console.log(selectedValue); // works
  };

  middle.onclick = () => {
    selectedValue = middle.value;
    console.log("You clicked on a secret button!"); // works
  };

  ///////////////////

  //This chnages the background accordingly to linear Gradient
  body.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;

  buttons.forEach((button) => {
    button.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;
  });
};

body.addEventListener("click", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

window.addEventListener("load", (event) => {
  body.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;

  buttons.forEach((button) => {
    button.style.backgroundImage = `linear-gradient(${selectedValue},${color1.value},${color2.value})`;
  });
});
