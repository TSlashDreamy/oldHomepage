let onclick = false;
const button = document.querySelector(".infoButton");

const mouseMoveHandler = (event) => {
  clearInterval(loop);
  document.onclick = null;
  button.classList.remove("infoButton_isActive");
};

const toggleHandler = (event) => {
  const classes = button.classList;
  if (classes.contains("infoButton_isActive")) {
    classes.remove("infoButton_isActive");
  } else {
    classes.add("infoButton_isActive");
  }
};

document.onclick = mouseMoveHandler;

const loop = setInterval(toggleHandler, 1000);
