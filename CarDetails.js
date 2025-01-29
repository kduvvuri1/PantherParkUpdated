import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase'; // Import Firebase auth and Firestore
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate, Navigate } from 'react-router-dom';

const CarDetails = () => {
    const [vehicles, setVehicles] = useState([{ year: '', make: '', model: '', plate: '' }]); // Initially one vehicle
    const [message, setMessage] = useState('');
    const [showSecondVehicle, setShowSecondVehicle] = useState(false); // Toggle for second vehicle form
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVehicleDetails = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const vehicleDoc = await getDoc(doc(db, 'vehicles', user.uid));
                    if (vehicleDoc.exists()) {
                        const data = vehicleDoc.data().vehicles || [];
                        setVehicles(data.length > 0 ? data : [{ year: '', make: '', model: '', plate: '' }]);
                        setShowSecondVehicle(data.length > 1); // Show second form if data for a second vehicle exists
                    }
                } else {
                    console.error("No user logged in.");
                }
            } catch (error) {
                console.error("Error fetching vehicle details:", error.message);
            }
        };

        fetchVehicleDetails();
    }, []);

    if (!auth.currentUser) {
        console.error("User not logged in.");
        return <Navigate to="/login" />;
    }

    const handleSave = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const filteredVehicles = vehicles.filter(vehicle => vehicle.year || vehicle.make || vehicle.model || vehicle.plate); // Remove empty vehicles
                await setDoc(doc(db, 'vehicles', user.uid), { vehicles: filteredVehicles });
                setMessage('Vehicle details saved successfully!');
            }
        } catch (error) {
            console.error("Error saving vehicle details:", error.message);
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleInputChange = (index, field, value) => {
        const updatedVehicles = [...vehicles];
        updatedVehicles[index][field] = value;
        setVehicles(updatedVehicles);
    };

    const handleAddSecondVehicle = () => {
        setVehicles([...vehicles, { year: '', make: '', model: '', plate: '' }]);
        setShowSecondVehicle(true);
    };

    const handleRemoveSecondVehicle = () => {
        const updatedVehicles = [...vehicles];
        updatedVehicles.pop(); // Remove the last vehicle (second vehicle)
        setVehicles(updatedVehicles);
        setShowSecondVehicle(false); // Hide second vehicle form
    };

    return (
        <div className="dashboard-container">
            <div className="white-frame">
                <h2>Add/Edit Vehicle Details</h2>
                {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}

                {/* Vehicle 1 */}
                <div style={{ marginBottom: '20px' }}>
                    <h3>Vehicle 1</h3>
                    <input
                        type="text"
                        placeholder="Year"
                        value={vehicles[0]?.year || ''}
                        onChange={(e) => handleInputChange(0, 'year', e.target.value)}
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        placeholder="Make"
                        value={vehicles[0]?.make || ''}
                        onChange={(e) => handleInputChange(0, 'make', e.target.value)}
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        placeholder="Model"
                        value={vehicles[0]?.model || ''}
                        onChange={(e) => handleInputChange(0, 'model', e.target.value)}
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        placeholder="License Plate"
                        value={vehicles[0]?.plate || ''}
                        onChange={(e) => handleInputChange(0, 'plate', e.target.value)}
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                </div>

                {/* Vehicle 2 */}
                {showSecondVehicle && (
                    <div style={{ marginBottom: '20px' }}>
                        <h3>Vehicle 2</h3>
                        <input
                            type="text"
                            placeholder="Year"
                            value={vehicles[1]?.year || ''}
                            onChange={(e) => handleInputChange(1, 'year', e.target.value)}
                            style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="text"
                            placeholder="Make"
                            value={vehicles[1]?.make || ''}
                            onChange={(e) => handleInputChange(1, 'make', e.target.value)}
                            style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="text"
                            placeholder="Model"
                            value={vehicles[1]?.model || ''}
                            onChange={(e) => handleInputChange(1, 'model', e.target.value)}
                            style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="text"
                            placeholder="License Plate"
                            value={vehicles[1]?.plate || ''}
                            onChange={(e) => handleInputChange(1, 'plate', e.target.value)}
                            style={{ padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <button
                            onClick={handleRemoveSecondVehicle}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                backgroundColor: 'red',
                                color: 'white',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}
                        >
                            Remove 2nd Vehicle
                        </button>
                    </div>
                )}

                {/* Add Second Vehicle Button */}
                {!showSecondVehicle && (
                    <button
                        onClick={handleAddSecondVehicle}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            backgroundColor: '#0033a0',
                            color: 'white',
                            cursor: 'pointer',
                            marginBottom: '20px',
                        }}
                    >
                        Add 2nd Vehicle
                    </button>
                )}

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        backgroundColor: '#0033a0',
                        color: 'white',
                        cursor: 'pointer',
                        marginBottom: '20px',
                    }}
                >
                    Save Details
                </button>

                {/* Back to Dashboard */}
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

export default CarDetails;
