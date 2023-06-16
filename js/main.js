slides = document.querySelectorAll(".slide");
console.log(slides);
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
    console.log(slide);
    console.log(slide.classList);
  });
});

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
