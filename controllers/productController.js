const products = [];
currentId = 1;

const addProduct = (req, res) => {
  try {
    const { name, price, category } = req.body;
    const product = {
      id: currentId++,
      name,
      price,
      category,
    };
    products.push(product);

    res.status(200).json({
      messege: "Product added successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Error Details:", error.stack); // Logs full stack trace
    res.status(500).json({ success: false, error: error.message });
  }
};

const getProducts = (req, res) => {
  res.status(200).json({
    success: true,
    data: products,
  });
};

const getProductById = (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(400).json({
      error: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

const updateProduct = (req, res) => {
  try {
    const { name, price, category } = req.body;
    const index = products.findIndex(
      (product) => product.id === parseInt(req.params.id)
    );

    if (index === -1) {
      return res.status(400).json({
        error: "Product cannot find",
      });
    }
    products[index] = { ...products[index], ...req.body };

    res.status(200).json({
      seccess: true,
      messege: "Product updated successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.messege || "Internal server error",
    });
  }
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(400).json({
      error: "Product not found",
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    success: true,
    messege: "Product deletted successfully",
  });
};

module.exports = { getProducts, addProduct,getProductById, updateProduct, deleteProduct };
