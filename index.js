// Your code here

const dodger = document.getElementById("dodger");
document.getElementById("dodger").style.background = "#FF69B4";


const moveDodgerLeft = () => {
  let distance = (dodger.style.left.replace("px", ""));
  if (distance > 0) {
    dodger.style.left = distance - 1 + "px";
  }
}
const moveDodgerRight = () =>{
  let distance = parseInt(dodger.style.left.replace("px", ""));
  if (distance < 360) {
    dodger.style.left = distance + 1 + "px";
  }
}

dodger.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
