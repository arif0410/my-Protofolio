import React from 'react';

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Product List</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
            <span>
              {product.name} - ${product.price} - Quantity: {product.quantity}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-500 text-white rounded-md px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white rounded-md px-3 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
