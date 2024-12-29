import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">E-Shop</Link>
                <div>
                    <Link to="/" className="mx-2">Home</Link>
                    <Link to="/login" className="mx-2">Login</Link>
                    <Link to="/register" className="mx-2">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
