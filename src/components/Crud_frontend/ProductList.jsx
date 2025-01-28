import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="w-full bg-white shadow-md rounded-md overflow-hidden table-auto">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="px-4 py-2">No</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Subtitle</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Mentor</th>
          <th className="px-4 py-2">Photo</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{product.title}</td>
            <td className="px-4 py-2">{product.subtitle}</td>
            <td className="px-4 py-2">{product.price}</td>
            <td className="px-4 py-2">{product.mentor}</td>
            <td className="px-4 py-2">
              <img src={product.photoUrl} alt={product.title} className="h-12 w-12 rounded-md object-cover" />
            </td>
            <td className="px-4 py-2">{product.description}</td>
            <td className="px-4 py-2 space-x-2">
              <button onClick={() => onEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                Edit
              </button>
              <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded-md">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
