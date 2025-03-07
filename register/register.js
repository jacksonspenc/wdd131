document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;

    // Add participant button event listener
    document.getElementById("addParticipant").addEventListener("click", function () {
        participantCount++;
        let newParticipantHTML = participantTemplate(participantCount);
        document.getElementById("addParticipant").insertAdjacentHTML("beforebegin", newParticipantHTML);
    });

    // Handle form submission
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get total fee amount
        let totalFee = 0;
        document.querySelectorAll(".fee").forEach(feeInput => {
            totalFee += parseFloat(feeInput.value) || 0;
        });

        // Get adult name
        let adultName = document.getElementById("adultName").value;

        // Hide form and show summary
        document.getElementById("registrationForm").style.display = "none";
        let summary = document.getElementById("summary");
        summary.style.display = "block";
        summary.innerHTML = `Thank you <strong>${adultName}</strong> for registering. You have registered <strong>${participantCount}</strong> participants and owe <strong>$${totalFee.toFixed(2)}</strong> in fees.`;
    });
});

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