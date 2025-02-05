import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-xl text-gray-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:block md:h-screen`}
      >
        <div className="p-6 text-xl font-bold text-orange-600">
          videobelajar
        </div>
        <ul className="mt-8">
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            <a href="/">Crud</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            <a href="/axios">Axios</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
            <a href="/redux">Redux</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
