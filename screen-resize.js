/* switch between horizontal/vertical modes depending on viewport aspect ratio */
const infoPane = document.querySelector(".info-pane");
const body = document.querySelector("body");
function onResize() {
  if (window.innerHeight > window.innerWidth) {
    body.classList.add("body-mobile");
    infoPane.classList.add("info-pane-mobile");
    return;
  }
  body.classList.remove("body-mobile");
  infoPane.classList.remove("info-pane-mobile");
}
window.onresize = onResize;
onResize();
