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
    currentTransform = Math.min(currentTransform + 300, 0); // To prevent scrolling too far left
    container.style.transform = `translateX(${currentTransform}px)`;
  });

  nextButton.addEventListener("click", function () {
    const maxTransform = -(container.scrollWidth - container.clientWidth); // To prevent scrolling too far right
    currentTransform = Math.max(currentTransform - 300, maxTransform);
    container.style.transform = `translateX(${currentTransform}px)`;
  });
}

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
  } else {
    topButton.style.visibility = "hidden";
    topButton.style.opacity = "0";
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

// This function is called when the custom dropdown is clicked
function toggleCustomSelect(wrapper) {
  // This line toggles the visibility of the dropdown options
  wrapper.querySelector(".custom-select-options").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  // Toggles the custom select options
  document
    .querySelectorAll(".custom-select-visible")
    .forEach(function (select) {
      select.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("hidden"); // This assumes that the ul element is right after the div
      });
    });

  // Updates the placeholder and the actual select value when an option is clicked
  document
    .querySelectorAll(".custom-select-options li")
    .forEach(function (option) {
      option.addEventListener("click", function () {
        const wrapper = this.closest(".custom-select-wrapper");
        const text = this.textContent;
        const value = this.getAttribute("data-value");
        const placeholder = wrapper.querySelector(".custom-select-placeholder");
        const nativeSelect = wrapper.querySelector(".custom-select");

        // Update the placeholder text
        placeholder.textContent = text;

        // Update the value of the native select element
        nativeSelect.value = value;

        // Hide the custom options again
        wrapper.querySelector(".custom-select-options").classList.add("hidden");

        // Optional: Trigger any change event listeners attached to the native select
        const event = new Event("change", { bubbles: true });
        nativeSelect.dispatchEvent(event);
      });
    });

  // Close the custom select options if clicking outside of the select
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".custom-select-visible")) {
      document
        .querySelectorAll(".custom-select-options")
        .forEach(function (optionsList) {
          optionsList.classList.add("hidden");
        });
    }
  });
});
