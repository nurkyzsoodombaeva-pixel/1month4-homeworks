const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|kg)$/;

gmailBtn.onclick = () => {
  if (regex.test(gmailInput.value)) {
    gmailResult.style.color = "green";
    gmailResult.innerHTML = "VALID";
  } else {
    gmailResult.style.color = "red";
    gmailResult.innerHTML = "INVALID";
  }
};

//2

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;
let directionX = 0;
let directionY = 0;

const Block = () => {
  if (positionX < parentBlock.clientWidth - childBlock.clientWidth) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(Block);
  } else if (positionY < parentBlock.clientHeight - childBlock.clientHeight) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
    requestAnimationFrame(Block);
  } else if (directionX < parentBlock.clientWidth - childBlock.clientWidth) {
    directionX++;
    childBlock.style.left = `${positionX - directionX}px`;
    requestAnimationFrame(Block);
  } else if (directionY < parentBlock.clientHeight - childBlock.clientHeight) {
    directionY++;
    childBlock.style.top = `${positionY - directionY}px`;
    requestAnimationFrame(Block);
  } else {
    positionX = 0;
    positionY = 0;
    directionX = 0;
    directionY = 0;
    requestAnimationFrame(Block);
  }
};

Block();

//3
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let second = 0;
let interval = null;

startBtn.onclick = () => {
  if (interval !== null) return;
  interval = setInterval(() => {
    second++;
    seconds.innerHTML = second;
  }, 1000);
};

stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  second = 0;
  seconds.innerHTML = second;
};
