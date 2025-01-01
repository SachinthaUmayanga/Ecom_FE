import React, { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/Product');
                setProducts(response.data);
            }
            catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((products) => (
                    <div key={products.Id} className="border p-4 rounded shadow">
                        {/* Product image */}
                        {products.ImageUrl && (
                            <img
                                src={products.ImageUrl}
                                alt={products.Name}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                        )}

                        {/* Product details */}
                        <h2 className="text-xl font-bold">{products.Name}</h2>
                        <p>{products.Description}</p>
                        <p className="text-blue-600 font-bold">Price: LKR.{products.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;