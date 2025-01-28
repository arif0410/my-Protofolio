import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md fixed">
      <div className="p-6 text-xl font-bold text-orange-600">
        videobelajar
      </div>
      <ul className="mt-8">
        <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
          <a href="#">Dashboard</a>
        </li>
        <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
          <a href="#">Products</a>
        </li>
        <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
          <a href="#">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
