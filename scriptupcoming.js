function toggleCustomSelect(wrapper) {
  const optionsList = wrapper.querySelector(".custom-select-options");
  optionsList.classList.toggle("hidden");
}
document
  .querySelectorAll(".custom-select-options li")
  .forEach(function (option) {
    option.addEventListener("click", function () {
      const wrapper = this.closest(".custom-select-wrapper");
      const text = this.textContent;
      const value = this.getAttribute("data-value");
      const placeholder = document.getElementById("custom-placeholder");
      const nativeSelect = wrapper.querySelector(".custom-select");
      console.log("Option clicked:", text, value);
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
