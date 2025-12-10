document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const registeredName = localStorage.getItem("userName");
    const registeredEmail = localStorage.getItem("userEmail");
    const registeredPassword = localStorage.getItem("userPassword");

    // Check if any user is registered
    if(!registeredEmail || !registeredPassword){
        alert("No registered user found. Please register first!");
        return; // stay on login page
    }

    // Check credentials
    if(emailInput === registeredEmail && passwordInput === registeredPassword){
        alert("Login Successful!");
        localStorage.setItem("userName", registeredName); // save for dashboard
        window.location.href = "dashboard.html"; // redirect
    } else {
        alert("Invalid Email or Password!"); // show error
        document.getElementById("loginForm").reset(); // clear inputs
    }
});
