const form = document.getElementById("form");
const formTitle = document.getElementById("form-title");
const confirmPasswordGroup = document.getElementById("confirm-password-group");
const submitBtn = document.getElementById("submit-btn");
const toggleForm = document.getElementById("toggle-form");
const toggleLink = document.getElementById("toggle-link");

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const togglePassword = document.getElementById("toggle-password");
const toggleConfirmPassword = document.getElementById("toggle-confirm-password");

let isLogin = true;

// Toggle between Login and Signup
toggleForm.addEventListener("click", () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    confirmPasswordGroup.style.display = "none";
    submitBtn.textContent = "Login";
    toggleLink.innerHTML = `Don't have an account? <span id="toggle-form">Sign up</span>`;
  } else {
    formTitle.textContent = "Sign up";
    confirmPasswordGroup.style.display = "block";
    submitBtn.textContent = "Sign up";
    toggleLink.innerHTML = `Already have an account? <span id="toggle-form">Login</span>`;
  }
});

// Show/Hide Password Toggle
togglePassword.addEventListener("click", () => {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
});

// Show/Hide Confirm Password Toggle
toggleConfirmPassword.addEventListener("click", () => {
  const type = confirmPasswordField.type === "password" ? "text" : "password";
  confirmPasswordField.type = type;
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!isLogin) {
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signed up successfully!");
  } else {
    alert("Logged in successfully!");
  }
});
