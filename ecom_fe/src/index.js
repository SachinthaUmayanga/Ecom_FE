import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using React 18
import './index.css';
import App from './App';

// Create a root element using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
