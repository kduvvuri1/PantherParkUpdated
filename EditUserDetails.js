import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import {
    updateEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';

const EditUserDetails = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            setEmail(auth.currentUser.email);
        } else {
            console.error("No user is currently logged in.");
        }
    }, []);

    if (!auth.currentUser) {
        return <Navigate to="/login" />;
    }

    // Reauthenticate the user before sensitive operations
    const reauthenticateUser = async (currentPassword) => {
        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            console.log("User reauthenticated successfully");
        } catch (error) {
            console.error("Error reauthenticating user:", error.message);
            throw error;
        }
    };

    const handleUpdateDetails = async (e) => {
        e.preventDefault();
        try {
            if (email && email !== auth.currentUser.email) {
                // Prompt the user for their current password to confirm email update
                const currentPassword = prompt("Please enter your current password to confirm email update:");
                if (currentPassword) {
                    await reauthenticateUser(currentPassword);
                    await updateEmail(auth.currentUser, email);
                }
            }
            if (password) {
                await updatePassword(auth.currentUser, password);
            }
            setMessage('User details updated successfully!');
        } catch (error) {
            console.error("Error updating user details:", error.message);
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="dashboard-container">
            <div className="white-frame">
                <h2>Edit User Details</h2>
                {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
                <form onSubmit={handleUpdateDetails}>
                    <input
                        type="email"
                        placeholder="New Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            backgroundColor: '#0033a0',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                    >
                        Update Details
                    </button>
                </form>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/dashboard')}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        backgroundColor: '#0033a0',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default EditUserDetails;

