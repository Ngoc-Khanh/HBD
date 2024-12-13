"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const gifImg = document.querySelector(".gif-img");

const MAX_IMAGES = 5;

let play = 5;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  // titleElement.innerHTML = "HAPPY BIRTHDAY TO YOU";
  // buttonsContainer.classList.add("hidden");
  // changeImage("yes");
  window.location.href = "loading.html";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Ơ chê à? Sao không chọn YES?",
    "Vẫn chê thật luôn???",
    "Cậu bị làm sao vậy???",
    "Cho cơ hội lần nữa nhá!!!",
    "VẪN CHÊ CƠ À, YES MAU!!!!!",
    "Toiiiii met~ moi~ quá~~~~",
  ];

  const messagesIndex = Math.min(noCount, messages.length - 1);
  return messages[messagesIndex];
}

function changeImage(image) {
  gifImg.src = `assets/img/mocha-${image}.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}