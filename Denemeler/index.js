const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://bedirhansigirci:13579@cluster0.yhin6f0.mongodb.net/ShopDb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const Product = mongoose.model('Product', {
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
