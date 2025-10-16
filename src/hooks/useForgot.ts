// Importing useState hook from React to manage component state
import { useState } from "react";

// Custom React Hook: useForgot
// This hook handles the logic for a "Forgot Password" feature
const useForgot = () => {
  // State to indicate loading status (true while processing request)
  const [loading, setLoading] = useState(false);

  // State to track whether the password reset email has been sent
  const [emailSent, setEmailSent] = useState(false);

  // Function triggered when the forgot password form is submitted
  // 'values' is an object that includes the user's email address
  const onFinish = async (values: { email: string }) => {
    setLoading(true); // Set loading to true to indicate processing has started

    try {
      // Here you would typically call Firebase or backend API to send reset email
      // Example:
      // await sendPasswordResetEmail(auth, values.email);

      // If successful, mark email as sent
      setEmailSent(true);
    } catch (error) {
      // Catch and log any errors (e.g., invalid email, network issue, etc.)
      console.error(error);
    } finally {
      // Always stop the loading spinner when done (success or fail)
      setLoading(false);
    }
  };

  // Returning states and functions to be used in the Forgot Password component
  return {
    loading,       // Whether the request is in progress
    setLoading,    // Setter function for loading
    emailSent,     // Whether the reset email was sent successfully
    setEmailSent,  // Setter function for emailSent
    onFinish       // Handler function for form submission
  };
};

// Exporting the custom hook for use in other components
export default useForgot;