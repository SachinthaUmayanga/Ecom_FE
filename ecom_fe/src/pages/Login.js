import React, { useState } from 'react';
import api from '../services/api';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await api.post('/Auth/login', formData);
            console.log('Login response:', response.data);  // Log the full response to see the structure
            setMessage(response.data.Message); // Backend sends a success message
            console.log('User:', response.data.User); // User data can be stored if needed
        } catch (error) {
            console.log('Error object:', error);

            if (error.response && error.response.data) {
                setError(
                    error.response.data.Message || // Look for "Message" field
                    'Login failed. Please check your credentials.' // Fallback message
                );
            } else if (error.request) {
                setError('Unable to connect to the server. Please try again later.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                {message && (
                    <p className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
                        {message}
                    </p>
                )}
                {error && (
                    <p className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4">
                        {error}
                    </p>
                )}

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
