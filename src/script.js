document.addEventListener('DOMContentLoaded', () => {
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
       
