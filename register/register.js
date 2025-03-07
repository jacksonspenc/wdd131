document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1; // Set initial count to 1

    document.getElementById("addParticipant").addEventListener("click", function () {
        participantCount++; // Increment participant count

        // Select the first participant section to clone
        let firstParticipant = document.querySelector(".participant");
        let newParticipant = firstParticipant.cloneNode(true); // Deep clone

        // Update the new section's attributes to ensure unique IDs
        newParticipant.id = "participant" + participantCount;
        newParticipant.querySelector("label[for='name1']").setAttribute("for", "name" + participantCount);
        newParticipant.querySelector("input[id='name1']").id = "name" + participantCount;
        newParticipant.querySelector("input[name='name1']").name = "name" + participantCount;

        newParticipant.querySelector("label[for='email1']").setAttribute("for", "email" + participantCount);
        newParticipant.querySelector("input[id='email1']").id = "email" + participantCount;
        newParticipant.querySelector("input[name='email1']").name = "email" + participantCount;

        // Insert new participant before the button
        document.getElementById("participants").insertBefore(newParticipant, document.getElementById("addParticipant"));
    });
});