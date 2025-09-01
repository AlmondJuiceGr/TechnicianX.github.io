// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Form validation feedback
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    msg.textContent = "❗ Please fill out all fields correctly.";
    msg.style.color = "red";
  } else {
    msg.textContent = "✔️ Sending...";
    msg.style.color = "lime";
  }
});
