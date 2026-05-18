console.log("script connected");

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});