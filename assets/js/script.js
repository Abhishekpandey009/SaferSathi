// script.js

document.addEventListener("DOMContentLoaded", () => {
    const heroMessage = document.querySelector(".hero p");
    
    // Set a time-based greeting
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      heroMessage.textContent = "Good Morning! Start your journey with us.";
    } else if (currentHour < 18) {
      heroMessage.textContent = "Good Afternoon! Let's get you to your destination.";
    } else {
      heroMessage.textContent = "Good Evening! Ready for your next ride?";
    }
  });
  // Toggle dark and light modes
const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    toggleModeButton.textContent = 'Light Mode';
  } else {
    toggleModeButton.textContent = 'Dark Mode';
  }
});
document.getElementById("calculatePrice").addEventListener("click", calculatePrice);

document.getElementById("calculatePrice").addEventListener("click", () => {
  const location = document.getElementById("location").value.trim();
  const destination = document.getElementById("destination").value.trim();
  if (!location || !destination) {
    alert("Please enter both location and destination!");
    return;
  }
  // Proceed with price calculation logic
  document.getElementById("price").textContent = `Estimated price for your ride: ₹XYZ`;
});

// JavaScript for Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Animate Hamburger Icon
    hamburger.classList.toggle("active");
  });
});

