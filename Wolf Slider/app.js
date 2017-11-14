let clickPoint = document.getElementById("hero");

clickPoint.addEventListener("click", (e) => {
  console.log(e.screenX);
});
console.log(clickPoint);