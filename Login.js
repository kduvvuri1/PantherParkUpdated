// import React, { useState } from 'react';
// import { signIn } from './auth';
// import { Link, useNavigate } from 'react-router-dom';
// import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signIn(email, password);
//             navigate('/dashboard');
//         } catch (error) {
//             console.error("Error logging in:", error.message);
//             setError('Invalid Campus ID or password. Please try again.');
//         }
//     };

//     return (
//         <div className="login-container">
//             {/* GSU Logo at the top */}
//             <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

//             {/* Login Form */}
//             <h2>PantherPark</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Campus ID"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Log In</button>
//             </form>

//             {/* Links for assistance */}
//             <div className="help-links">
//                 <Link to="/forgot-id-password">Do not know your CampusID or Password?</Link>
//                 <Link to="/duo-help">Help with Duo Multifactor Authentication</Link>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { signIn } from './auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error logging in:", error.message);
            setError('Invalid Campus ID or password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            {/* GSU Logo at the top */}
            <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

            {/* Login Form */}
            <h2>PantherPark</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Campus ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>

            {/* Links for assistance */}
            <div className="help-links">
                <Link to="/forgot-id-password">Do not know your CampusID or Password?</Link>
                <Link to="/duo-help">Help with Duo Multifactor Authentication</Link>
            </div>

            {/* Back Button to Home (with sign-out) */}
            <button
                onClick={() => {
                    signOut(auth).then(() => navigate('/')).catch(error => console.error("Error signing out:", error));
                }}
                style={{ marginTop: '20px' }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default Login;
