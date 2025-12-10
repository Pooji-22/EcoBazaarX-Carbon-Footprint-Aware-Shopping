// ----- Input Validations -----
document.getElementById("name").addEventListener("input", function () {
    let status = document.getElementById("nameStatus");
    status.textContent = this.value.length >= 3 ? "✔" : "✖";
    status.style.color = this.value.length >=3 ? "green":"red";
});

document.getElementById("email").addEventListener("input", function () {
    let status = document.getElementById("emailStatus");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    status.textContent = pattern.test(this.value) ? "✔" : "✖";
    status.style.color = pattern.test(this.value) ? "green" : "red";
});

document.getElementById("mobile").addEventListener("input", function () {
    let status = document.getElementById("mobileStatus");
    status.textContent = /^[6-9]\d{9}$/.test(this.value) ? "✔":"✖";
    status.style.color = /^[6-9]\d{9}$/.test(this.value) ? "green":"red";
});

document.getElementById("password").addEventListener("input", function () {
    let text = document.getElementById("strengthText");
    let status = document.getElementById("passStatus");
    let strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!]).{8,}/;
    if (this.value.length < 4) {
        text.textContent = "Weak Password"; text.style.color="red"; status.textContent="✖"; status.style.color="red";
    } else if (!strong.test(this.value)) {
        text.textContent = "Medium Password"; text.style.color="orange"; status.textContent="!"; status.style.color="orange";
    } else {
        text.textContent = "Strong Password"; text.style.color="green"; status.textContent="✔"; status.style.color="green";
    }
});

document.getElementById("confirmPassword").addEventListener("input", function () {
    let status = document.getElementById("confirmStatus");
    status.textContent = this.value === document.getElementById("password").value ? "✔":"✖";
    status.style.color = this.value === document.getElementById("password").value ? "green":"red";
});

// ----- Form Submission -----
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = document.getElementById("registerForm");
    const userName = document.getElementById("name").value.trim();
    const userEmail = document.getElementById("email").value.trim();
    const userMobile = document.getElementById("mobile").value.trim();
    const userPassword = document.getElementById("password").value;

    // Check if email already exists
    const existingEmail = localStorage.getItem("userEmail");
    if(existingEmail === userEmail){
        alert("This email is already registered! Please login or use another email.");
        form.reset(); // clear all input fields
        return;
    }

    // Save user data
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userMobile", userMobile);
    localStorage.setItem("userPassword", userPassword);

    // Registration successful → redirect
    alert("Registered Successfully!");
    window.location.href = "dashboard.html";
});
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const mobileField = document.getElementById("mobile");
const passField = document.getElementById("password");
const confirmField = document.getElementById("confirmPassword");
const registerBtn = document.querySelector(".btn"); // register button

registerBtn.disabled = true; // disable initially

function validateForm() {
    const validName = nameField.value.trim().length >= 3;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
    const validMobile = /^[6-9]\d{9}$/.test(mobileField.value);
    const strongPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!]).{8,}/.test(passField.value);
    const confirmMatch = passField.value === confirmField.value;

    if (validName && validEmail && validMobile && strongPass && confirmMatch) {
        registerBtn.disabled = false;  // enable
    } else {
        registerBtn.disabled = true;   // keep disabled
    }
}

// Listen for input changes
[nameField, emailField, mobileField, passField, confirmField].forEach(input => {
    input.addEventListener("input", validateForm);
});
