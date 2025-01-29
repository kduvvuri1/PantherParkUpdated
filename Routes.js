import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import EditUserDetails from './EditUserDetails';
import CarDetails from './CarDetails'; // Import CarDetails component
import TestFirebase from './TestFirebase';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Home Route */}
                <Route path="/" element={<Home />} />
                
                {/* Login Route */}
                <Route path="/login" element={<Login />} />

                {/* Signup Route */}
                <Route path="/signup" element={<Signup />} />

                {/* Dashboard Route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Edit User Details Route */}
                <Route path="/edit-user" element={<EditUserDetails />} />

                {/* Add/Edit Vehicle Details Route */}
                <Route path="/vehicle-details" element={<CarDetails />} />

                {/* Test Firebase Route (Optional) */}
                <Route path="/test-firebase" element={<TestFirebase />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
