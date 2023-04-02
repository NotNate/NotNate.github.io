const typing = document.querySelector('.typing');
const words = ["Student", "Back-end Developer", "Machine Learning Enthusiast"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  currentWord = words[i % words.length];
  if (isDeleting) {
    typing.textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      // Pause after deleting a word
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    typing.textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
      // Pause after typing a word
      if (i == words.length - 1) {
        // Pause on the last word for 5 seconds
        setTimeout(() => {
          isDeleting = true; // set isDeleting to true to continue with backspace animation
          type(); // continue with backspace animation
        }, 5000);
      } else {
        setTimeout(type, 1000);
      }
    } else {
      setTimeout(type, 50);
    }
  }
}

type();