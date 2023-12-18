document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simplified login logic for demonstration
            window.location.href = 'main.html'; // Redirect to main page on login
        });
    }
});
