window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "";
  }
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("carousel_cont");
  const prevButton = document.getElementById("carousel_previous_button");
  const nextButton = document.getElementById("carousel_next_button");
  let currentTransform = 0;

  prevButton.addEventListener("click", function () {
    currentTransform += 300;
    container.style.transform = `translateX(${currentTransform}px)`;
  });

  nextButton.addEventListener("click", function () {
    currentTransform -= 300;
    container.style.transform = `translateX(${currentTransform}px)`;
  });
});

document.getElementById("ontheater").addEventListener("click", function (e) {
  e.preventDefault();
  var targetelement = document.querySelector(this.getAttribute("href"));

  if (targetelement) {
    targetelement.scrollIntoView({ behavior: "smooth" });
  }
});

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
});

let closeButton = document.getElementById("closebutton");
closeButton.addEventListener("click", function () {
  loginContainer.style.visibility = "hidden";
  loginContainer.style.opacity = "0";
  document.body.classList.remove("body-blur");
});
let topButton = document.getElementById("topbutton");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topButton.style.visibility = "visible";
    topButton.style.opacity = "1";
  }
});

topButton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  topButton.classList.add("active");
  setTimeout(function () {
    topButton.classList.remove("active");
    topButton.style.visibility = "hidden";
    topButton.style.opacity = "0";
  }, 300);
});
