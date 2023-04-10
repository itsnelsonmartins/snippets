import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProvider from './ContextApi';
import App from './App';

import 'bulma/css/bulma.min.css';
import './css/variables.css';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
