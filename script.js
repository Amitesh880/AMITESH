document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Show the popup
    document.getElementById('popup').style.display = 'block';
});

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}