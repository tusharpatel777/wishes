// // // Play sound when the bomb image is clicked
// // const bombElement = document.getElementById("bombElement");
// // const bombSound = document.getElementById("bombSound");

// // bombElement.addEventListener("click", () => {
// //   bombSound.currentTime = 0; // Reset sound to the beginning
// //   bombSound.play();
// // });

// // function toggleMusic() {
// //   const music = document.getElementById("backgroundMusic");
// //   if (music.paused) {
// //     music.play();
// //   }
// //    else {
// //     music.pause();

// //   }

// // }

// // toggleMusic()



 

// // // window.addEventListener("load", () => {
// // //   const backgroundMusic = document.getElementById("backgroundMusic");
// // //   backgroundMusic.muted = false; // Unmute the audio
// // //   backgroundMusic.play().catch(error => {
// // //     console.log("Autoplay blocked, trying again:", error);
// // //   });
// // // });

// // // document.getElementById("bombElement").addEventListener("click", function() {
// // //     const bombSound = document.getElementById("bombSound");
// // //     bombSound.play();
// // //   });
  
// // Wait for user interaction to start background music
// document.addEventListener("click", () => {
//   const backgroundMusic = document.getElementById("backgroundMusic");
  
//   backgroundMusic.play().then(() => {
//     backgroundMusic.muted = false; // Unmute the audio after it starts
//     console.log("Background music started successfully.");
    
//     // Remove this event listener after music starts
//     document.removeEventListener("click", arguments.callee);
//   }).catch(error => {
//     console.error("Autoplay blocked even after interaction:", error);
//   });
// });

// Play sound when the bomb image is clicked
const bombElement = document.getElementById("bombElement");
const bombSound = document.getElementById("bombSound");

bombElement.addEventListener("click", () => {
  bombSound.currentTime = 0; // Reset sound to the beginning
  bombSound.play();
});

// // Toggle background music
// function toggleMusic() {
//   const music = document.getElementById("backgroundMusic");
//   if (music.paused) {
//     music.play();
//   } else {
//     music.pause();
//   }
// }
// Set up user interaction listener to start background music
// document.addEventListener("click", function playBackgroundMusic() {
//   const backgroundMusic = document.getElementById("backgroundMusic");

//   // Attempt to play audio after the first interaction
//   backgroundMusic.play().then(() => {
//     backgroundMusic.muted = false; // Unmute if necessary
//     console.log("Background music started successfully.");

//     // Remove this event listener after music starts playing
//     document.removeEventListener("click", playBackgroundMusic);
//   }).catch(error => {
//     console.error("Autoplay blocked even after interaction:", error);
//   });
// });

// Function to toggle background music playback
// function toggleMusic() {
//   const music = document.getElementById("backgroundMusic");
//   if (music.paused) {
//     music.play();
//   } else {
//     music.pause();
//   }
// }

const backgroundMusic = document.getElementById('backgroundMusic');
const musicIcon = document.getElementById('musicIcon');

musicIcon.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.style.setProperty('--icon', '"❚❚"'); // Change to pause icon
    } else {
        backgroundMusic.pause();
        musicIcon.style.setProperty('--icon', '"▶"'); // Change to play icon
    }
});

// Optional: Change icon based on the music state
backgroundMusic.addEventListener('play', () => {
    musicIcon.textContent = '❚❚'; // Pause icon
});

backgroundMusic.addEventListener('pause', () => {
    musicIcon.textContent = '▶'; // Play icon
});

