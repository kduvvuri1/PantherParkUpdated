// import { auth } from './firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// // Function to sign up a new user
// export const signUp = async (email, password) => {
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         return userCredential;
//     } catch (error) {
//         console.error("Error signing up:", error.message);
//         throw error;
//     }
// };

// // Function to sign in an existing user
// export const signIn = async (email, password) => {
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         return userCredential;
//     } catch (error) {
//         console.error("Error signing in:", error.message);
//         throw error;
//     }
// };

import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Function to sign up a new user
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem('isLoggedIn', 'true'); // Set session item on sign up
        return userCredential;
    } catch (error) {
        console.error("Error signing up:", error.message);
        throw error;
    }
};

// Function to sign in an existing user
export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem('isLoggedIn', 'true'); // Set session item on sign in
        return userCredential;
    } catch (error) {
        console.error("Error signing in:", error.message);
        throw error;
    }
};

// Function to check if the user is logged in for the current session
export const isUserLoggedIn = () => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
};

// Function to log out the user and clear session data
export const logOut = async () => {
    try {
        await signOut(auth);
        sessionStorage.removeItem('isLoggedIn'); // Clear session item on sign out
    } catch (error) {
        console.error("Error signing out:", error.message);
        throw error;
    }
};
