const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Mock user for testing
const mockUser = { username: 'Test', password: 'Test' };
// ... [Endpoints for login, add to cart, checkout] ...
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});