
function scrollToFeelings() {
  const section = document.getElementById("feelings");
  section.scrollIntoView({ behavior: "smooth" });
}
function scrollToFeelings() {
  document.getElementById("feelings").scrollIntoView({ behavior: "smooth" });
}

// Ensure background music plays (some browsers block autoplay)
window.addEventListener("load", () => {
  const audio = document.getElementById("bgMusic");
  if (audio) {
    audio.play().catch(() => {
      // If blocked by browser, allow user interaction to trigger it
      document.body.addEventListener("click", () => audio.play(), { once: true });
    });
  }
});
