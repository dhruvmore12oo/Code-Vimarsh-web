// JavaScript for Login page (auth.js)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Client-side validation
            if (username.trim() === '' || password.trim() === '') {
                errorMessage.textContent = 'Please enter both username/email and password.';
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Login successful, redirect to dashboard or home
                    alert(data.message); // For demonstration, show alert
                    window.location.href = 'dashboard.html'; // Redirect to a simple dashboard
                } else {
                    errorMessage.textContent = data.message || 'Login failed. Please try again.';
                }
            } catch (error) {
                console.error('Error during login:', error);
                errorMessage.textContent = 'An error occurred. Please try again later.';
            }
        });
    }
});


