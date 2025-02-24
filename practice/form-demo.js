// Attach event listener to form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#payment-form");
    const paymentMethod = document.querySelector("#paymentMethod");

    if (form) {
        form.addEventListener("submit", validateForm);
    }

    if (paymentMethod) {
        paymentMethod.addEventListener("change", togglePaymentDetails);
    }
});

function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;

    // Validate email
    const email = theForm.querySelector("#email");
    if (!email.value.includes("@")) {
        isValid = false;
        errors.push("Please enter a valid email address.");
    }

    // Validate phone number (must be 10 digits)
    const phone = theForm.querySelector("#phone");
    if (!/^\d{10}$/.test(phone.value)) {
        isValid = false;
        errors.push("Phone number must be 10 digits.");
    }

    // Validate payment method details
    const paymentMethod = theForm.querySelector("#paymentMethod").value;
    if (paymentMethod === "credit-card") {
        const cardNumber = theForm.querySelector("#creditCardNumber");
        if (!/^\d{16}$/.test(cardNumber.value)) {
            isValid = false;
            errors.push("Credit card number must be 16 digits.");
        }
    } else if (paymentMethod === "paypal") {
        const paypalEmail = theForm.querySelector("#paypalUsername");
        if (!paypalEmail.value.includes("@")) {
            isValid = false;
            errors.push("Please enter a valid PayPal email.");
        }
    }

    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
        return false;
    }
}

function togglePaymentDetails(event) {
    const theForm = document.querySelector("#payment-form");
    const creditCardContainer = document.querySelector("#creditCardContainer");
    const paypalContainer = document.querySelector("#paypalContainer");

    // Hide both containers
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Disable required attributes
    theForm.querySelector("#creditCardNumber").removeAttribute("required");
    theForm.querySelector("#paypalUsername").removeAttribute("required");

    // Show only the selected payment method's container
    if (event.target.value === "credit-card") {
        creditCardContainer.classList.remove("hide");
        theForm.querySelector("#creditCardNumber").setAttribute("required", "true");
    } else if (event.target.value === "paypal") {
        paypalContainer.classList.remove("hide");
        theForm.querySelector("#paypalUsername").setAttribute("required", "true");
    }
}

function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`).join("");
    errorEl.innerHTML = html;
}
