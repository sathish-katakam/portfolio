function animate(id, end) {
  let i = 0;
  let interval = setInterval(() => {
    i++;
    document.getElementById(id).innerText = i;
    if (i >= end) clearInterval(interval);
  }, 20);
}

window.onload = () => {
  if (document.getElementById("clusters")) {
    animate("clusters", 20);
    animate("pods", 300);
    animate("requests", 200);
  }
};

function showInfo(text) {
  const box = document.getElementById("info");
  box.style.display = "block";
  box.innerText = text;
}
