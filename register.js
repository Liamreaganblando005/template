document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user input
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    // Get existing users data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the phone number is already registered
    const existingUser = users.find(user => user.phoneNumber === phoneNumber);
    if (existingUser) {
        alert('This phone number is already registered!');
    } else {
        // Register the new user
        users.push({ phoneNumber, password });

        // Save the updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in.');

        // Redirect to login page after successful registration
        window.location.href = 'login.html'; // Redirect to login page
    }
});






