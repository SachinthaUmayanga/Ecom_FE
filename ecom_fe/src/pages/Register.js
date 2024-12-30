import React, { useState } from 'react';
import api from '../services/api';

function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        role: 'User',  // Default to 'User'
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await api.post('/Auth/register', formData);
            setMessage(response.data); // Assuming backend sends a plain success message
        } catch (error) {
            if (error.response && error.response.data) {
                const backendError = error.response.data;
                if (typeof backendError === 'string') {
                    setError(backendError);
                } else if (backendError.Message) {
                    setError(backendError.Message);
                } else {
                    setError('An unknown error occurred.');
                }
            } else {
                setError('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

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
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

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

                {/* Display role field for admins */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="role"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="User">User</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
