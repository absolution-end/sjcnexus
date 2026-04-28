// // ================= NAVBAR + WATERMARK SCROLL =================
// window.addEventListener("scroll", function () {
//   const nav = document.getElementById("navbar");
//   const watermark = document.querySelector(".watermark");

//   let scrollY = window.scrollY;

//   // NAVBAR SHOW / HIDE
//   if (scrollY > 100) {
//     nav.classList.add("show");
//   } else {
//     nav.classList.remove("show");
//   }

//   // WATERMARK FADE (SMOOTH)
//   if (watermark) {
//     let opacity = 1 - scrollY / 300;

//     // clamp value between 0 and 1
//     if (opacity < 0) opacity = 0;
//     if (opacity > 1) opacity = 1;

//     watermark.style.opacity = opacity;
//   }
// });


// // ================= SMOOTH SCROLL =================
// document.querySelectorAll("nav a").forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     const target = document.querySelector(targetId);

//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   });
// });


// // ================= OPTIONAL: ACTIVE NAV LINK =================
// window.addEventListener("scroll", () => {
//   let sections = document.querySelectorAll("section");
//   let navLinks = document.querySelectorAll("nav a");

//   let current = "";

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 100;
//     if (window.scrollY >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });

// ================= SCROLL ANIMATIONS =================
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  const watermark = document.querySelector(".watermark");
  const product = document.querySelector(".product");

  let scrollY = window.scrollY;
  
  // ================= NAVBAR =================
  if (scrollY > 100) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }

  // ================= WATERMARK FADE =================
  if (watermark) {
    let opacity = 1 - scrollY / 250;   // 👈 faster fade
    opacity = Math.max(0, Math.min(1, opacity)); // clamp
    watermark.style.opacity = opacity;
  }

  // ================= PRODUCT MOVE + FADE =================
  if (product) {
    let moveDown = Math.min(scrollY*.5, 400); // 👈 controls speed
    let fadeOut = 1 - scrollY / 400;

    fadeOut = Math.max(0, Math.min(1, fadeOut));

    product.style.transform = `translateY(${moveDown}px)`;
    product.style.opacity = fadeOut;
  }
  
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}); 

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// CREATE DOTS
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

// UPDATE SLIDE
function updateSlider() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// AUTO SLIDE
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 3000);


// ================= SMOOTH SCROLL =================
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});