// Play sound when the bomb image is clicked
const bombElement = document.getElementById("bombElement");
const bombSound = document.getElementById("bombSound");

bombElement.addEventListener("click", () => {
  bombSound.currentTime = 0; // Reset sound to the beginning
  bombSound.play();
});

function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// document.getElementById("bombElement").addEventListener("click", function() {
//     const bombSound = document.getElementById("bombSound");
//     bombSound.play();
//   });
  
