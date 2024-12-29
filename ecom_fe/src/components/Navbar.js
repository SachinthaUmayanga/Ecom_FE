import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">M-Shop</h1>
                <div>
                    <a href="/login" className="mx-2 hover:underline">Login</a>
                    <a href="/cart" className="mx-2 hover:underline">Cart</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;