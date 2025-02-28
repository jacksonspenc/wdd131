document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting before validation
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Username validation
    let usernameValid = username.length >= 5 && !/\s/.test(username);
    if (!usernameValid) {
        alert("Username must be at least 5 characters long and cannot contain spaces.");
        return;
    }

    // Email validation
    let emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailValid) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation (same as discussed)
    let hasRepeats = /(.)\1{2,}/.test(password);  // Repeated characters
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let isLongEnough = password.length >= 8;

    if (hasRepeats) {
        alert("Password contains repeated characters. Please choose a stronger password.");
        return;
    } else if (!(isLongEnough && hasUpperCase && hasNumber && hasSpecialChar)) {
        alert("Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.");
        return;
    }

    alert("Registration successful!");
});