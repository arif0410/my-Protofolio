import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDelete, onEdit }) => {
  if (products.length === 0) {
    return <p>Tambahkan sebuah produk.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default ProductList;
