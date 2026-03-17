const LAMP = {
  red: document.getElementById("myProgress-red"),
  yellow: document.getElementById("myProgress-yellow"),
  green: document.getElementById("myProgress-green"),
};

let currentState = "stop";

function setLights(state) {
  const grey = "grey";

  if (state === "wait") {
    if (currentState === "go") {
      state = "waitToStop";
    } else {
      state = "waitToGo";
    }
  }

  switch (state) {
    case "stop":
      LAMP.red.style.backgroundColor = "red";
      LAMP.yellow.style.backgroundColor = grey;
      LAMP.green.style.backgroundColor = grey;
      break;
    case "waitToGo":
      LAMP.red.style.backgroundColor = "red";
      LAMP.yellow.style.backgroundColor = "yellow";
      LAMP.green.style.backgroundColor = grey;
      break;
    case "waitToStop":
      LAMP.red.style.backgroundColor = grey;
      LAMP.yellow.style.backgroundColor = "yellow";
      LAMP.green.style.backgroundColor = grey;
      break;
    case "go":
      LAMP.red.style.backgroundColor = grey;
      LAMP.yellow.style.backgroundColor = grey;
      LAMP.green.style.backgroundColor = "green";
      break;
    default:
      LAMP.red.style.backgroundColor = grey;
      LAMP.yellow.style.backgroundColor = grey;
      LAMP.green.style.backgroundColor = grey;
  }

  currentState = state;
}
