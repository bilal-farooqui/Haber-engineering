const express = require('express');
const multer = require('multer'); // Import multer
const { getAllProduct, addProduct, updateProduct } = require('../controller/productController');

const router = express.Router();

// Configure multer to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Ensure uploads are saved here
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Unique file name
    }
  });

// // Set up multer for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Store files in the 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Save file with unique name
//   }
// });

const upload = multer({ storage: storage });

// Route for adding a product (with image upload)
router.post('/', upload.single('image'), addProduct); // 'image' should match the field name in your form


router.get('/', getAllProduct);
// router.post('/', upload.single('image'), addProduct); // Handle image upload for single file
// router.put('/:id', upload.single('image'), updateProduct); // Handle image upload for single file

// Route for updating a product
router.put('/:id', updateProduct);

module.exports = router;
