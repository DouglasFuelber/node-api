const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Route definition
routes.get('/products', ProductController.index);

module.exports = routes;