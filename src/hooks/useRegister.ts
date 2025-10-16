// Importing React's useState hook for managing local state
import { useState } from "react";

// Importing useNavigate hook from React Router for programmatic navigation
import { useNavigate } from "react-router-dom";

// Defining a custom hook called useRegister
// This hook handles registration logic, loading state, and navigation
const useRegister = () => {
  // State to track whether the registration process is in progress
  const [loading, setLoading] = useState(false);

  // useNavigate hook for redirecting users to different routes
  const navigate = useNavigate();

  // Function executed when the registration form is successfully submitted
  // 'values' contains email, password, and displayName fields from the form
  const onFinish = async (values: { email: string; password: string; displayName: string }) => {
    setLoading(true); // Set loading to true while processing registration

    try {
      // In a real app, you would call Firebase Auth or your backend API here
      // Example: await createUserWithEmailAndPassword(auth, values.email, values.password);
      // Optionally, update profile with displayName

      // Navigate to dashboard after successful registration
      navigate('/dashboard');
    } catch (error) {
      // Log any error during registration
      console.error(error);
    } finally {
      // Stop the loading spinner regardless of success or failure
      setLoading(false);
    }
  };

  // Function to handle Google login during registration (OAuth)
  const handleGoogleLogin = async () => {
    setLoading(true); // Indicate that login is in progress

    try {
      // In a real app, you'd call Firebase Google provider logic here
      // Example: await signInWithPopup(auth, googleProvider);

      // Navigate to dashboard after successful Google login
      navigate('/dashboard');
    } catch (error) {
      // Log any error that occurs
      console.error(error);
    } finally {
      // Stop loading spinner
      setLoading(false);
    }
  };

  // Return all states and functions for use in the RegisterForm component
  return {
    loading,           // Boolean indicating if registration/login is processing
    setLoading,        // Function to manually set loading state
    onFinish,          // Handles form submission for registration
    handleGoogleLogin  // Handles Google sign-in
  };
};

// Exporting the custom hook for use in other components
export default useRegister;