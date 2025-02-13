// Simulated database
let products = [];

exports.getAllProducts = (req, res) => {
  res.json({
    status: 'success',
    data: products
  });
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found'
    });
  }
  res.json({
    status: 'success',
    data: product
  });
};

exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: 'error',
      message: 'Name and price are required'
    });
  }
  
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
    createdAt: new Date()
  };
  
  products.push(newProduct);
  res.status(201).json({
    status: 'success',
    data: newProduct
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  
  const productIndex = products.findIndex(p => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found'
    });
  }
  
  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
    description: description || products[productIndex].description,
    updatedAt: new Date()
  };
  
  res.json({
    status: 'success',
    data: products[productIndex]
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex(p => p.id === parseInt(id));
  
  if (productIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found'
    });
  }
  
  products = products.filter(p => p.id !== parseInt(id));
  res.status(204).send();
};