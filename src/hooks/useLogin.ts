// Importing React's useState hook for managing local component state
import { useState } from "react";

// Importing useNavigate hook from React Router for programmatic navigation
import { useNavigate } from "react-router-dom";

// Defining a custom hook called useLogin
// This hook handles the login logic, loading state, and navigation
const useLogin = () => {
  // State variable to track whether a login process is currently loading
  const [loading, setLoading] = useState(false);

  // useNavigate hook for redirecting users to different routes
  const navigate = useNavigate();

  // Function executed when the login form is successfully submitted
  // 'values' is an object containing email and password fields
  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true); // Set loading to true while processing login

    try {
      // In a real app, this is where you'd call Firebase Auth or your backend API
      // Example: await signInWithEmailAndPassword(auth, values.email, values.password);

      // Navigate to dashboard page after successful login
      navigate('/dashboard');
    } catch (error) {
      // Log any error that occurs during the login attempt
      console.error(error);
    } finally {
      // Stop the loading spinner regardless of success or failure
      setLoading(false);
    }
  };

  // Function to handle Google Login (or any OAuth login)
  const handleGoogleLogin = async () => {
    setLoading(true); // Indicate that login is in progress
    try {
      // In a real scenario, you'd call Firebase Google provider logic here
      // Example: await signInWithPopup(auth, googleProvider);

      // Navigate to dashboard after successful Google login
      navigate('/dashboard');
    } catch (error) {
      // Log any login error
      console.error(error);
    } finally {
      // Stop the loading spinner
      setLoading(false);
    }
  };

  // Returning all states and functions so they can be used in the Login component
  return {
    loading,             // Indicates whether a login is being processed
    setLoading,          // Setter for manually changing loading state
    navigate,            // Navigation function from React Router
    onFinish,            // Handles form submission login
    handleGoogleLogin    // Handles Google sign-in
  };
};

// Exporting the useLogin hook for use in other components
export default useLogin;