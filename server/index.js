const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const introDataRoutes = require('./routes/introDataRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Increase bodyParser size limit for large requests
app.use(bodyParser.json({ limit: '10mb' }));  // Adjust the limit to 10mb or higher if needed
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Use CORS middleware with specific configuration
app.use(cors({
    origin: 'http://localhost:3000', // Allow only requests from your frontend's origin
    methods: 'GET,POST', // Allow only these methods
}));

// Initialize multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Ensure file is uploaded to 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // Use timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage });

// Routes for handling products (upload routes)
app.use('/product', productRoutes);

// Error handling for larger files
app.post('/upload', upload.single('image'), (req, res) => {
  // Handle file upload
  res.send('File uploaded successfully');
});

// Middleware
app.use(express.json());

// productbase connection
connectToDatabase();

// Routes
app.use('/introData', introDataRoutes);
app.use('/service', serviceRoutes);
app.use('/order', orderRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/user', userRoutes);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
