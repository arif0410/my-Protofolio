import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  const [product, setProduct] = useState({
    title: '',
    subtitle: '',
    price: '',
    mentor: '',
    roleMentor: '',
    photoUrl: '',
    description: '',
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData); 
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);  
    setProduct({
      title: '',
      subtitle: '',
      price: '',
      mentor: '',
      roleMentor: '',
      photoUrl: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-200 p-6 shadow-md rounded-md space-y-4">
      <div className='display flex gap-4'>
        <div>
          <label className="block font-bold">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={product.subtitle}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Mentor</label>
          <input
            type="text"
            name="mentor"
            value={product.mentor}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Role Mentor</label>
          <input
            type="text"
            name="roleMentor"
            value={product.roleMentor}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Photos URL</label>
          <input
            type="text"
            name="photoUrl"
            value={product.photoUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            rows="4"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {initialData ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
