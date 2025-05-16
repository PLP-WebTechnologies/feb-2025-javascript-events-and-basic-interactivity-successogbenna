// Event Handling
document.getElementById("clickButton").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#add8e6";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#e0e0e0";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  document.getElementById("keypressOutput").textContent = `You pressed: ${e.key}`;
});

// Secret action: double-click
document.getElementById("secretAction").addEventListener("dblclick", () => {
  alert("🎉 You discovered the secret action!");
});

// Interactive Elements
document.getElementById("colorChangeButton").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Image Gallery Logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("nextSlide").addEventListener("click", () => {
  slides[slideIndex].classList.add("hidden");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.remove("hidden");
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach((tab) => tab.classList.add("hidden"));
    document.getElementById(`tab-${btn.dataset.tab}`).classList.remove("hidden");
  });
});

// Form Validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameFeedback = document.getElementById("nameFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

nameInput.addEventListener("input", () => {
  nameFeedback.textContent = nameInput.value.trim() ? "" : "Name is required";
});

emailInput.addEventListener("input", () => {
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value);
  emailFeedback.textContent = valid ? "" : "Invalid email format";
});

passwordInput.addEventListener("input", () => {
  passwordFeedback.textContent = passwordInput.value.length >= 8 ? "" : "Password must be at least 8 characters";
});

document.getElementById("demoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value.trim() || !emailInput.value || passwordInput.value.length < 8) {
    alert("Please fix the errors before submitting.");
  } else {
    alert("Form submitted successfully!");
  }
});
