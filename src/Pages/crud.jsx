import React, { useState, useEffect } from 'react';
import ProductList from '../components/Crud_frontend/ProductList';
import Sidebar from '../components/Crud_frontend/Sidebar';          
import ProductForm from '../components/Crud_frontend/ProductForm';  

const App = () => {
  const [products, setProducts] = useState([
    { title: 'square', subtitle: 'B42', price: 10000, mentor: 'B42', roleMentor: 'B42', photoUrl: 'B42' },
    { title: 'box', subtitle: 'B32', price: 10000, mentor: 'B42', roleMentor: 'B42', photoUrl: 'B42' },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  const handleAddProduct = (product) => {
    if (editIndex !== null && editIndex >= 0) {
      const updatedProducts = products.map((p, index) => (index === editIndex ? product : p));
      setProducts(updatedProducts);
    } else {
      setProducts([...products, product]);
    }
    setEditIndex(null);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="flex bg-slate-300 h-auto">
      <Sidebar />
      <div className="flex-grow ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>
        <ProductForm
          onSubmit={handleAddProduct}
          initialData={editIndex !== null ? products[editIndex] : null}
        />
        <div className='bg-slate-200 p-6 shadow-md mt-4'> 
          <h1>Product List</h1>
        </div>
        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default App;