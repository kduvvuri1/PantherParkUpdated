// src/App.js
import React, { useEffect } from 'react';
import AppRoutes from './Routes';
import './index.css';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function App() {
    useEffect(() => {
        // Sign out user on app load to start fresh
        signOut(auth).catch((error) => console.error("Error signing out:", error));
    }, []);

    return (
        <div>
            <AppRoutes />
        </div>
    );
}

export default App;
