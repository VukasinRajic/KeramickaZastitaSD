// galerija-----------------------------------------------------------
const galleries = document.querySelectorAll(".section-gallery");

galleries.forEach((gallery, index) => {
  const slides = gallery.querySelectorAll(".slide");
  const btnLeft = gallery.querySelector(".slider__btn--left");
  const btnRight = gallery.querySelector(".slider__btn--right");
  const dotContainer = gallery.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    gallery
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    gallery
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide function
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
});

// galerija-----------------------------------------------------------

// faq----------------------------------------------------------------
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
// faq----------------------------------------------------------------

// sticky nav bar-----------------------------------------------------
const nav = document.querySelector(".nav");
const sectionNoSticky = document.querySelector("#secnosticky");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-92px`,
});
section1Observer.observe(sectionNoSticky);

// sticky nav bar-----------------------------------------------------

// reveal section-----------------------------------------------------
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
// reveal section-----------------------------------------------------

// scroll to event----------------------------------------------------
document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".logo")) {
    const id = "#section-1";
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// scroll to event----------------------------------------------------
document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-li")) {
    setMenu();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// scroll to event----------------------------------------------------

// menu btn----------------------------------------------------------
const menu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".nav");
const setMenu = () => header.classList.toggle("nav-open");
menu.addEventListener("click", setMenu);
// menu btn----------------------------------------------------------

// tretmani btns go to-----------------------------------------------
const tretmani = document.querySelectorAll(".tretmani");

tretmani.forEach(function (tretman) {
  tretman.addEventListener("click", function (e) {
    const closestTretman = e.target.closest(".tretmani");
    if (closestTretman) {
      const id = closestTretman.id;
      window.location.href = id + ".html";
    }
  });
});
// tretmani btns go to-----------------------------------------------
// detailing cene----------------------------------------------------
document.querySelector(".malavozila").addEventListener("click", function (e) {
  if (e.target.textContent == "MALA VOZILA") {
    e.target.textContent = "80e - 90e";
    e.target.style.backgroundColor = "gray";
  } else {
    e.target.textContent = "MALA VOZILA";
    e.target.style.backgroundColor = "black";
  }
});

document
  .querySelector(".srednjavozila")
  .addEventListener("click", function (e) {
    if (e.target.textContent == "SREDNJA VOZILA") {
      e.target.textContent = "90e - 100e";
      e.target.style.backgroundColor = "gray";
    } else {
      e.target.textContent = "SREDNJA VOZILA";
      e.target.style.backgroundColor = "black";
    }
  });

document.querySelector(".velikavozila").addEventListener("click", function (e) {
  if (e.target.textContent == "VELIKA VOZILA") {
    e.target.textContent = "100e - 120e";
    e.target.style.backgroundColor = "gray";
  } else {
    e.target.textContent = "VELIKA VOZILA";
    e.target.style.backgroundColor = "black";
  }
});
// detailing cene----------------------------------------------------

// mapa--------------------------------------------------------------
const map = L.map("map").setView([44.62400017795887, 20.90167137372933], 26);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([44.62400017795887, 20.90167137372933])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
    })
  )
  .setPopupContent(`Keramička zaštita SD`)
  .openPopup();
// mapa--------------------------------------------------------------

// mapa za link------------------------------------------------------
function openGoogleMap() {
  link =
    "https://www.google.com/maps/place/Keramicka+Zastita+SD/@44.623235,20.8987342,17z/data=!3m1!4b1!4m6!3m5!1s0x67fd180f871bc0b1:0xa3dae3f74709788c!8m2!3d44.623235!4d20.9013091!16s%2Fg%2F11kqqmzn10?entry=ttu";
  window.open(link);
}
// mapa za link------------------------------------------------------
