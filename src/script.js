document.addEventListener('DOMContentLoaded', () => {
    // Login Functionality
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    // Product Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Product added to cart!');
            // Implement add to cart functionality
        });
    });

    // Order Tracking functionality
    const trackingForm = document.getElementById('tracking-form');
    trackingForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
