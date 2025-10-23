const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching products' });
    } else {
      res.json(results);
    }
  });
};

