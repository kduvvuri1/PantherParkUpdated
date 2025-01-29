
// import React from 'react';
// import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

// const Dashboard = () => {
//     return (
//         <div className="dashboard-container">
//             {/* GSU Logo at the top */}
//             <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

//             <h2>Welcome to Your Dashboard!</h2>
//             <p style={{ fontSize: '18px', marginTop: '20px', color: '#0033a0' }}>
//                 This is where you can manage your parking information effortlessly.
//             </p>
//         </div>
//     );
// };

// export default Dashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import gsuLogo from './assets/logogsu.png'; // Import GSU logo here

// const Dashboard = () => {
//     return (
//         <div className="dashboard-container">
//             <div className="white-frame">
//                 <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />
//                 <h2>Welcome to Your Dashboard!</h2>
//                 <p style={{ fontSize: '18px', marginTop: '20px', color: '#0033a0' }}>
//                     This is where you can manage your parking information effortlessly.
//                 </p>
//             </div>
//         </div>
//     );
// };



// export default Dashboard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import gsuLogo from './assets/logogsu.png';

// const Dashboard = () => {
//     const navigate = useNavigate();
//     return (
//         <div className="dashboard-container">
//             <div className="white-frame">
//                 <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />
//                 <h2>Welcome to Your Dashboard!</h2>
//                 <p style={{ fontSize: '18px', marginTop: '20px', color: '#0033a0' }}>
//                     This is where you can manage your parking information effortlessly.
//                 </p>
//                 {/* Add Back Button */}
//                 <button onClick={() => navigate('/login')} style={{ marginTop: '20px' }}>
//                     Back to Login
//                 </button>
//             </div>
//         </div>

        
//     );
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import gsuLogo from './assets/logogsu.png';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="white-frame">
                {/* GSU Logo */}
                <img src={gsuLogo} alt="Georgia State University Logo" className="gsu-logo" />

                {/* Dashboard Welcome Message */}
                <h2>Welcome to Your Dashboard!</h2>
                <p style={{ fontSize: '18px', marginTop: '20px', color: '#0033a0' }}>
                    This is where you can manage your parking information effortlessly.
                </p>

                {/* Dashboard Buttons for Additional Options */}
                <div className="dashboard-buttons">
                    <button
                        onClick={() => navigate('/vehicle-details')}
                        className="dashboard-button"
                    >
                        Add/Edit Vehicle Details
                    </button>
                    <button
                        onClick={() => navigate('/parking-decks')}
                        className="dashboard-button"
                    >
                        View Available Parking Decks
                    </button>
                    <button
                        onClick={() => navigate('/edit-user')}
                        className="dashboard-button"
                    >
                        Edit User Details
                    </button>
                </div>

                {/* Back Button to Login */}
                <button onClick={() => navigate('/login')} style={{ marginTop: '20px' }}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default Dashboard;



