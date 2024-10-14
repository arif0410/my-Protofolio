import React, { useState, useEffect } from 'react';
import ProductForm from '../components/Crud_frontend/ProductForm';
import ProductList from '../components/Crud_frontend/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) setProducts(storedProducts);
  }, []);

  // Save data to localStorage whenever products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null); // reset edit state
    } else {
      setProducts([...products, newProduct]);
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">CRUD Application Without Database</h1>
      <ProductForm
        onSubmit={addProduct}
        initialData={editIndex !== null ? products[editIndex] : null}
        isEditing={editIndex !== null}
      />
      <ProductList products={products} onDelete={deleteProduct} onEdit={editProduct} />
    </div>
  );
};

export default App;
