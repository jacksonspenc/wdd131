document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;

    // Add participant button event listener
    document.getElementById("addParticipant").addEventListener("click", function () {
        participantCount++;
        let newParticipantHTML = participantTemplate(participantCount);
        document.getElementById("addParticipant").insertAdjacentHTML("beforebegin", newParticipantHTML);
    });

    // Form submit event listener
    document.getElementById("registrationForm").addEventListener("submit", submitForm);
});

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the total fee
    let totalFee = calculateTotalFee();

    // Get the adult name
    let adultName = document.getElementById("adultName").value;

    // Create the info object
    let info = {
        name: adultName,
        participantCount: participantCount,
        totalFee: totalFee
    };

    // Hide the form and show the summary
    document.getElementById("registrationForm").style.display = "none";
    let summary = document.getElementById("summary");
    summary.style.display = "block";
    summary.innerHTML = successTemplate(info);
}

// Function to calculate the total fee
function calculateTotalFee() {
    let totalFee = 0;
    document.querySelectorAll(".fee").forEach(feeInput => {
        totalFee += parseFloat(feeInput.value) || 0; // Ensure valid number
    });
    return totalFee;
}

// Function to generate success message
function successTemplate(info) {
    return `
        <p>Thank you <strong>${info.name}</strong> for registering.</p>
        <p>You have registered <strong>${info.participantCount}</strong> participants and owe <strong>$${info.totalFee.toFixed(2)}</strong> in fees.</p>
    `;
}

// Function to generate participant HTML
function participantTemplate(count) {
    return `
        <section class="participant" id="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}">

            <label for="email${count}">Email:</label>
            <input type="email" id="email${count}" name="email${count}">

            <label for="fee${count}">Fee ($):</label>
            <input type="number" id="fee${count}" name="fee${count}" class="fee" min="0" value="0">
        </section>
    `;
}
