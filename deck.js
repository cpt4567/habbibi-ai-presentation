(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const progress = document.getElementById("progress");
  let index = 0;

  function show(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((slide, n) => slide.classList.toggle("active", n === index));
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  }

  function next() {
    show(index + 1);
  }

  function prev() {
    show(index - 1);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prev();
    }
    if (e.key === "Home") show(0);
    if (e.key === "End") show(slides.length - 1);
    if (e.key === "f" || e.key === "F") {
      const el = document.documentElement;
      if (!document.fullscreenElement) el.requestFullscreen?.();
      else document.exitFullscreen?.();
    }
  });

  document.getElementById("deck").addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const x = e.clientX / window.innerWidth;
    if (x > 0.55) next();
    else prev();
  });

  show(0);
})();
