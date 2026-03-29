document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.border = "1px solid #38bdf8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.border = "1px solid rgba(255,255,255,0.05)";
  });
});
