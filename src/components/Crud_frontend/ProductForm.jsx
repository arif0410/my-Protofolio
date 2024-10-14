import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData, isEditing }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Product Quantity"
        value={product.quantity}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
        {isEditing ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
