const ProductModel = require('../models/product');

// Get all data
const getAllProduct = async (req, res) => {
    try {
        // Parse 'limit' and 'start' query parameters (default: limit=10, start=0)
        const limit = parseInt(req.query.limit) || 10;
        const start = parseInt(req.query.start) || 0;

        // Fetch data with limit and skip
        const totalCount = await ProductModel.countDocuments();
        const data = await ProductModel.find().skip(start).limit(limit);
    
        res.json({ data, totalCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new product (with image upload)
const addProduct = async (req, res) => {
    const { title, description, buttonText, price, sold } = req.body;
    const image = req.file ? req.file.path : ''; // Store image path from multer
  
    const newData = new ProductModel({
      title,
      description,
      buttonText,
      price,
      sold,
      image, // Store image path in the DB
    });
  
    try {
      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// // Add new data
// const addProduct = async (req, res) => {
//     const { name, description, price } = req.body;
//     const image = req.file ? req.file.filename : null; // Get the uploaded file name

//     const newProduct = new ProductModel({
//         name,
//         description,
//         price,
//         image // Save the image filename in the database
//     });

//     try {
//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };


const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const image = req.file ? req.file.filename : null; // Get the uploaded file name

    const updatedProductData = {
        name,
        description,
        price,
    };

    if (image) {
        updatedProductData.image = image; // Only update the image if it's provided
    }

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            updatedProductData,
            { new: true, upsert: true }
        );
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    getAllProduct,
    addProduct,
    updateProduct
};
