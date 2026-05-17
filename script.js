function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");

// Function to Display Error
function showError(el, message) {
  el.innerHTML = message;
}

// Function to Clear Error
function clearError(el) {
  el.innerHTML = "";
}

// Function to Validate Name
function validateName() {
  let value = nameInput.value.trim();
  if (value.length < 2) {
    showError(nameError, "Name must be at least 2 characters.");
    return false;
  }
  clearError(nameError);
  return true;
}

// Function to Validate Email
function validateEmail() {
  let value = emailInput.value.trim();
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
    showError(emailError, "Enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}

// Function to Validate Password
function validatePassword() {
  let value = passInput.value.trim();
  if (value ==="" ) {
    showError(passError, "Please fill in interested course .");
    return false;
  }
  clearError(passError);
  return true;
}

// Function to Validate Confirm
function validateConfirm() {
  let pass = passInput.value;
  let confirm = confirmInput.value;
  if (confirm === "") {
    showError(confirmError, "Please fill in your message.");
    return false;
  }else{
  clearError(confirmError);
  return true;
}
}
// Function to Validate Form
function validateForm() {
  let okName = validateName();
  let okEmail = validateEmail();
  let okPass = validatePassword();
  let okConfirm = validateConfirm();
  return okName && okEmail && okPass && okConfirm;
}

// Prevent Default Reloading
form.addEventListener("submit", function (event) {
  event.preventDefault();
// Clear Result
  result.innerHTML = "";

// Validate Form
  if (validateForm()) {
	  alert("“Thank you! Your message has been submitted successfully.”");
    result.className = "ok";
	form.reset();
  } else {
	  alert("pls fill in again")
    result.className = "error";
  }
});

function updateDateTime() {
	const now = new Date();
document.getElementById("gg").innerHTML = now.toLocaleString();
}
setInterval(updateDateTime,1000);