const clockHands = {
  second: document.querySelector(".second-hand"),
  minute: document.querySelector(".min-hand"),
  hour: document.querySelector(".hour-hand"),
};

function rotateClockHand(clockHand, degree) {
  clockHand.style.transform = `rotate(${degree}deg)`;
}

function updateClock() {
  const now = new Date();

  const secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
  if (now.getSeconds() === 0) {
    clockHands.second.style.transition = "none";
    rotateClockHand(clockHands.second, secondsDegrees);
    setTimeout(() => {
      clockHands.second.style.transition = "";
    }, 0);
  } else {
    rotateClockHand(clockHands.second, secondsDegrees);
  }

  const minsDegrees =
    (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90;
  rotateClockHand(clockHands.minute, minsDegrees);

  const hourDegrees =
    (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90;
  rotateClockHand(clockHands.hour, hourDegrees);
}

setInterval(updateClock, 1000);
updateClock();
