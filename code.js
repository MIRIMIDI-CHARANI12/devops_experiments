const form = document.getElementById("registration-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const Email = document.getElementById("Email").value;
    const SelectedEvent = document.getElementById("Event").value;

    alert("Thank you " + Name + "! You have registered for the " + SelectedEvent + "\nConfirmation sent to: " + Email);
});