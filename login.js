document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user input
    const phoneNumber = document.getElementById('login-phone-number').value;
    const password = document.getElementById('login-password').value;

    // Get existing users data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by phone number
    const user = users.find(user => user.phoneNumber === phoneNumber && user.password === password);

    if (user) {
        // Successful login
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        // Invalid login
        alert('Invalid phone number or password!');
    }
});

















