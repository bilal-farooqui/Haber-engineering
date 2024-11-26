const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const introDataRoutes = require('./routes/introDataRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// productbase connection
connectToDatabase();

// Routes
app.use('/product', productRoutes);
app.use('/introData', introDataRoutes);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
