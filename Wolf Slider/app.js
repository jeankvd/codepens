let clickPoint = window;
let overlay = document.getElementById("overlay");


clickPoint.addEventListener("click", (e) => {
  overlay.style.width = e.screenX + "px";
});