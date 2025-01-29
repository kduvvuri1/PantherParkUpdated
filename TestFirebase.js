import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const TestFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleTestSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Firebase is configured correctly. Signup successful!');
        } catch (error) {
            console.error("Firebase error:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Firebase Connection Test</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <br />
            <button onClick={handleTestSignup} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#007bff', color: 'white' }}>
                Test Signup
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default TestFirebase;
