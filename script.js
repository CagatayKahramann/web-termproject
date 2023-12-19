var counter = 1;
var interval;

function setRadioInterval() {
  interval = setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);
}

setRadioInterval();
document
  .querySelectorAll(".navigation-manual .manual-btn")
  .forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      clearInterval(interval);
      counter = index + 1;
      setTimeout(setRadioInterval, 5000);
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  setupCarousel(
    "carousel_cont",
    "carousel_previous_button",
    "carousel_next_button"
  );
  setupCarousel(
    "upcoming_carousel_cont",
    "upcoming_carousel_previous_button",
    "upcoming_carousel_next_button"
  );
});

function setupCarousel(containerId, prevButtonId, nextButtonId) {
  const container = document.getElementById(containerId);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);
  let currentTransform = 0;

  prevButton.addEventListener("click", function () {
    currentTransform = Math.min(currentTransform + 330, 0); // To prevent scrolling too far left
    container.style.transform = `translateX(${currentTransform}px)`;
  });

  nextButton.addEventListener("click", function () {
    const maxTransform = -(container.scrollWidth - container.clientWidth); // To prevent scrolling too far right
    currentTransform = Math.max(currentTransform - 330, maxTransform);
    container.style.transform = `translateX(${currentTransform}px)`;
  });
}

const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("mouseenter", function () {
  searchInput.classList.add("visible");
});

searchIcon.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!searchInput.matches(":focus")) {
      searchInput.classList.remove("visible");
    }
  }, 3000);
});

searchInput.addEventListener("blur", function () {
  searchInput.classList.remove("visible");
});

let loginButton = document.getElementById("login");

document.addEventListener("DOMContentLoaded", function () {
  var loginContainer = document.getElementById("logincontainer");
  if (loginContainer) {
    loginContainer.style.visibility = "hidden";
    loginContainer.style.opacity = "0";
  }
});
var loginContainer = document.getElementById("logincontainer");
loginButton.addEventListener("click", function () {
  loginContainer.style.visibility = "visible";
  loginContainer.style.opacity = "1";
  document.body.classList.add("body-blur");
  login_form.style.display = "block";
  register_form.style.display = "none";
});

let closeButton = document.getElementById("closebutton");
closeButton.addEventListener("click", function () {
  loginContainer.style.visibility = "hidden";
  loginContainer.style.opacity = "0";
  document.body.classList.remove("body-blur");
});

// Return to top button
let topButton = document.getElementById("top-button");
window.addEventListener("scroll", function () {
  if (window.scrollY > 320) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  topButton.classList.add("active");

  setTimeout(function () {
    topButton.classList.remove("active");
  }, 300);
});

let signup_button = document.getElementById("sign-up-button");
let login_form = document.getElementById("login-form");
let register_form = document.getElementById("register-form");
signup_button.addEventListener("click", function () {
  login_form.style.display = "none";
  register_form.style.display = "block";
});
