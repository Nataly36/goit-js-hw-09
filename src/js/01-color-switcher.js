function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let intervId = null;
const COLOR_NEXT = 1000;

const buttonStart = document.querySelector('button[data-start]');
const buttStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', btStartColor);
buttStop.addEventListener('click', btStopColorNext);


function btStartColor() {
    buttonStart.disabled = true;
    buttStop.disabled = false;

    intervId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, COLOR_NEXT);
}

function btStopColorNext() {
    buttonStart.disabled = false;
    buttStop.disabled = true;
    clearInterval(intervId);
}

