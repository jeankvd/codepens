let clickPoint = document.getElementById("hero");
let overlay = document.getElementById("overlay");


clickPoint.addEventListener("click", (e) => {
  console.log(e.screenX);
  overlay.style.width = e.screenX + "px";
});