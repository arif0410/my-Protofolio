import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <img
        src={product.imageUrl || '/B41.jpeg'}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700 mb-2">Deskripsi: {product.desc}</p>
      <p className="text-gray-700 mb-2">Harga: Rp.{product.price}</p>
      <p className="text-gray-700 mb-2">Qty: {product.quantity}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
