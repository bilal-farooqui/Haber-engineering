const express = require('express');
const multer = require('multer');
const { getAllService, addService, updateService } = require('../controller/serviceController');

const router = express.Router();
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

router.get('/', getAllService);
router.post('/',upload.single('image'), addService);
router.put('/:id', updateService);

module.exports = router;
