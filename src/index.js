const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);

  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
    title.innerHTML = "mouse is inside";
  } else {
    title.classList.remove(CLICKED_CLASS);
    title.innerHTML = "mouse is outside";
  }
}

function handleResize() {
  title.innerHTML = "i have been resiezed";
}

function mouseAction() {
  title.innerHTML = "right mouse clcik";
}

function init() {
  title.addEventListener("mouseover", handleClick);
  title.addEventListener("mouseout", handleClick);
  window.addEventListener("contextmenu", mouseAction);
  window.addEventListener("resize", handleResize);
}
init();
