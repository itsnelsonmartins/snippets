import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css';
import './css/variables.css';
import './css/style.css';
import './css/mediaQueries.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {console.log(
            '      ____     ____   ____   ____\r\n     /   /\\   /   /\\ /   /\\ /   /\\ \r\n    /   /_/__/   / //   / //   / / \r\n   /   _____    / //   / //___/ / \r\n  /   /\\___/   / //   / / \\___\\/ \r\n /___/ /  /___/ //___/ //___/\\ \r\n \\___\\/   \\___\\/ \\___\\/ \\___\\/\n\n'
        )}
        <App />
    </React.StrictMode>
);
