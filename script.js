console.log("ScrollReveal:", typeof ScrollReveal);

/*=============== SCROLL REVEAL ANIMATION ===============*/
console.log("JS loaded");

if (typeof ScrollReveal === "undefined") {
  console.error("❌ ScrollReveal not loaded");
} else {
  console.log("✅ ScrollReveal loaded");

  ScrollReveal().reveal("section", {
    origin: "bottom",
    distance: "30px",
    duration: 2600,
    delay: 400,           
    interval: 400,
    opacity: 0,
    scale: 0.97,
    easing: "ease-out",
    reset: false
  });
}



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

