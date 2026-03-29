// fake live metrics
function animate(id, end) {
  let i = 0;
  let interval = setInterval(() => {
    i++;
    document.getElementById(id).innerText = i;
    if (i >= end) clearInterval(interval);
  }, 20);
}

window.onload = () => {
  if (document.getElementById("pods")) {
    animate("pods", 300);
    animate("clusters", 20);
    animate("requests", 200);
  }
};
