// import React, { useState } from 'react';
// import { signUp } from './auth';
// import { Link, useNavigate } from 'react-router-dom';
// import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             await signUp(email, password);
//             navigate('/dashboard');
//         } catch (error) {
//             console.error("Error signing up:", error.message);
//             setError(`Failed to create an account: ${error.message}`);
//         }
//     };

//     return (
//         <div className="signup-container">
//             {/* GSU Logo at the top */}
//             <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

//             {/* Signup Form */}
//             <h2>Create Your Account</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSignup}>
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
//                 <button type="submit">Sign Up</button>
//             </form>

//             {/* Links for assistance */}
//             <div className="help-links">
//                 <Link to="/login">Already have an account? Log In</Link>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from './auth';
import gsuLogo from './assets/logogsu.png';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error signing up:", error.message);
            setError('Could not sign up. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />
            <h2>Sign Up for PantherPark</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
            </form>
            {/* Back Button to Home */}
            <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
                Back to Home
            </button>
        </div>
    );

    
};

export default Signup;

