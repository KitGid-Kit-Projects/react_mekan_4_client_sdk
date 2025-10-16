// Import authentication context hook to get current user
import { useAuth } from "@/context/AuthContext";
// Import Ant Design utilities for form management and notifications
import { Form, message } from "antd";
// Import Firebase Firestore functions for writing data
import { doc, setDoc } from "firebase/firestore";
// Import React hooks for state management
import { useState } from "react";
// Import navigation hook from React Router for page redirection
import { useNavigate } from "react-router-dom";
// Import Firestore database instance from your Firebase configuration
import { db } from '../firebase';

// Custom hook for adding a new user to Firestore
const useAddUser = () => {
  // Access the authenticated user from AuthContext
  const { user } = useAuth();

  // Initialize navigate function for redirecting to other pages
  const navigate = useNavigate();

  // Create a form instance using Ant Design’s Form hook
  const [form] = Form.useForm();

  // Declare loading state to control the button spinner and UI feedback
  const [loading, setLoading] = useState(false);

  // Function triggered when the form is submitted successfully
  const onFinish = async (values: any) => {
    // Exit early if there’s no authenticated user
    if (!user) return;

    // Set loading state to true to show spinner on submit button
    setLoading(true);

    try {
      // Create or overwrite a document in the 'usersData' collection
      // The document ID will be the current user's UID
      await setDoc(doc(db, 'usersData', user.uid), {
        uid: user.uid,                 // Store unique user ID
        displayName: values.displayName, // Store user’s name from form
        age: values.age,                 // Store user’s age
        city: values.city,               // Store user’s city
        photoURL: values.photoURL || '', // Optional photo URL (default empty)
        createdAt: new Date(),           // Timestamp of when data was created
      });

      // Show a success notification in UI
      message.success('User data added successfully!');
      // Redirect to the user list page
      navigate('/users');

    } catch (error: any) {
      // Log the error in console for debugging
      console.error(error);
      // Show error notification in UI
      message.error('Failed to add user data');
    } finally {
      // Stop loading spinner regardless of success or failure
      setLoading(false);
    }
  };

  // Return useful states and handlers for the component to use
  return { user, navigate, form, loading, setLoading, onFinish };
};

// Export custom hook to be used across components
export default useAddUser;