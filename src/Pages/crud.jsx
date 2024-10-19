import React, { useState, useEffect } from 'react';
import ProductForm from '../components/Crud_frontend/ProductForm';
import ProductList from '../components/Crud_frontend/ProductList';
import NavLayouts from '../components/Layouts/NavLayouts';
import FooterLayouts from '../components/Layouts/FooterLayouts';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) setProducts(storedProducts);
  }, []);


  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditIndex(null);
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

  const resetEdit = () => setEditIndex(null);

  return (
    <>
      <NavLayouts>
        <nav id="menu" className="hidden lg:flex lg:items-center lg:space-x-6 z-50 relative">
          <ul className="lg:flex lg:space-x-6">
            <li>
              <a href="/" className="block text-gray-800 hover:text-cyan-700">
                Crud
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-cyan-700">
                Kontak
              </a>
            </li>
            <li>
              <img className="w-8 h-8" src="/image1.png" alt="Logo" />
            </li>
          </ul>
        </nav>
      </NavLayouts>    
      <div className="w-full lg:w-1/4 p-4 bg-white shadow-md z-40 h-auto lg:fixed lg:top-16 lg:left-0 lg:h-screen lg:overflow-auto">
        <ProductForm
          onSubmit={addProduct}
          initialData={editIndex !== null ? products[editIndex] : null}
          isEditing={editIndex !== null}
          resetEdit={resetEdit}
        />
      </div>
      <div className='bg-slate-100 min-h-full'>
        <div className="min-h-screen p-6 lg:pl-[25%] pt-20 lg:pt-24 flex justify-center">
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-center mb-6">CRUD Front End</h1>
            <ProductList
              products={products}
              onDelete={deleteProduct}
              onEdit={editProduct}
            />
          </div>
        </div>
      </div>

      <FooterLayouts />
    </>
  );
};

export default App;
