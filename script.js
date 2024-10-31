// Play sound when the bomb image is clicked
const bombElement = document.getElementById("bombElement");
const bombSound = document.getElementById("bombSound");

bombElement.addEventListener("click", () => {
  bombSound.currentTime = 0; // Reset sound to the beginning
  bombSound.play();
});

// document.getElementById("bombElement").addEventListener("click", function() {
//     const bombSound = document.getElementById("bombSound");
//     bombSound.play();
//   });
  