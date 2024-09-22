import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white bg-opacity-90 shadow-lg border-b border-cyan-700 fixed top-0 w-full z-50 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-extrabold text-cyan-700 tracking-wide">
                    Arif Ibrahim
                </div>

                {/* Navigation for Larger Screens */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-cyan-700 font-semibold transition-colors duration-300">
                        Home
                    </a>
                    <a href="#" className="text-gray-700 hover:text-cyan-700 font-semibold transition-colors duration-300">
                        Karya
                    </a>
                    <a href="#" className="text-gray-700 hover:text-cyan-700 font-semibold transition-colors duration-300">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg`}>
                <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors">
                    Home
                </a>
                <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors">
                    Karya
                </a>
                <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors">
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
