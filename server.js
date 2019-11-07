const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Start app
const app = express();

// Start DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// Route definition
app.get('/', (req, res) => {
    Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebok/react-native"
    });

    res.send('Hello Douglas');
});

app.listen(3001);