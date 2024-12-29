import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                        <h3 className="font-bold">{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="text-blue-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;