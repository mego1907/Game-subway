

function moveLeft() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  if(left >= 0) {
    character.style.left = left + "px";
  }
}

function moveRight() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left += 100;
  if(left < 300) {
    character.style.left = left + "px";
  }
}

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowLeft") {moveLeft()};
  if(e.key == "ArrowRight") {moveRight()};
});

var block = document.getElementById("block");
var counter = 0;
block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px"
  counter++;
});

setInterval(() => {
  var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

  if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    window.alert(`Game Over . Score: ${counter}`);
    block.style.animation = "none";
  }
}, 1);

document.getElementById("left").addEventListener("touchstart", moveLeft());
document.getElementById("right").addEventListener("touchend", moveRight());

