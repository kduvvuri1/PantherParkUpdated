
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="home-container">
            {/* GSU Logo at the top */}
            <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#0033a0' }}>Welcome to PantherPark</h1>
            {user ? (
                <>
                    <p style={{ fontSize: '24px', marginTop: '20px', color: '#0033a0' }}>
                        Welcome back, <span style={{ fontWeight: 'bold' }}>{user.email}</span>!
                    </p>
                    <p>Manage your parking easily and conveniently.</p>
                </>
            ) : (
                <>
                    <p style={{ fontSize: '20px', marginTop: '20px', color: '#0033a0' }}>
                        Welcome to PantherPark! The easiest way to manage parking at Georgia State University.
                    </p>
                    <div className="links">
                        <Link to="/login" className="home-link">Log In</Link>
                        <Link to="/signup" className="home-link">Sign Up</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;