//selecting the major
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//function to set gradient

function setGradient() {
 body.style.background =
   "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

   css.textContent = body.style.background + ";";
}

//Event listener for color1

color1.addEventListener("input", setGradient)
//Event listener for color2
color2.addEventListener("input", setGradient);