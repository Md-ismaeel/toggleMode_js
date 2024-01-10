let toggle = document.querySelector(".toggleContainer");
let circle = document.querySelector("#circleWhite");
let text = document.querySelector(".h1Tag");
let x = document.querySelector("#svg1");
let y = document.querySelector("#svg2")

document.body.style.backgroundColor = "white";

toggle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    circle.style.left = "55%";
    circle.style.backgroundColor = "Orange";
    text.style.color = "orange";
    x.style.transform = "rotate(360deg)";
    x.style.transitionDuration = "0.5s"

  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    circle.style.left = "2%";
    circle.style.backgroundColor = "white";
    text.style.color = "black";
    y.style.transform = "rotate(360deg)";
    y.style.transitionDuration = ".5s"
  }
});
