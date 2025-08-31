// === Toggle Mobile Menu ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// === Contact Form Validation ===
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate
    if (name && validateEmail(email) && message) {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
      contactForm.reset();
    } else {
      formStatus.textContent = "Please fill in all fields with valid details.";
      formStatus.style.color = "red";
    }
  });
}

// === Helper Function: Email Validation ===
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}