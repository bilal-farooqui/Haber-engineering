const express = require('express');
const cors = require('cors');
const connectToproductbase = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// productbase connection
connectToproductbase();

// Routes
app.use('/product', productRoutes);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
