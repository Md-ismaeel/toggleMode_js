// let toggle = document.querySelector(".toggleContainer");
let circle = document.querySelector("#circleWhite");
let text = document.querySelector(".h1Tag");
let svg1 = document.querySelector("#svg1");
let svg2 = document.querySelector("#svg2");

let isDarkMode = true;
let lightMode = true;
document.body.style.backgroundColor = "white";

circle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    circle.style.left = "55%";
    circle.style.backgroundColor = "Orange";
    text.style.color = "orange";
    svg1.style.transform = `rotate(${isDarkMode ? 360 : 0}deg)`;
    isDarkMode = !isDarkMode;
    svg1.style.transitionDuration = "0.5s";
    text.style.transform = "translateY(40px)";
    text.style.transitionDuration = "0.5s"
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    circle.style.left = "2%";
    circle.style.backgroundColor = "white";
    text.style.color = "black";
    svg2.style.transform = `rotate(${lightMode ? 360 : 0}deg)`;
    lightMode = !lightMode;
    svg2.style.transitionDuration = ".5s";
    text.style.transform = "translateY(70px)";
    text.style.transitionDuration = "0.5s";
  }
});
