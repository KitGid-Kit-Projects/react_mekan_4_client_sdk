// Importing React hooks
import { useState, useEffect } from 'react';

// Importing routing hooks and Link for navigation
import { useNavigate, Link } from 'react-router-dom';

// Importing Ant Design components for UI
import { Form, Input, Button, Card, Divider } from 'antd';

// Importing Ant Design icons used in the form
import { GoogleOutlined, MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

// Importing custom hook that handles registration logic
import useRegister from '@/hooks/useRegister';

// Importing the RegisterForm component
import RegisterForm from '@/components/RegisterForm';

// Defining the Register page component
const Register = () => {
  // Destructuring states and functions from useRegister hook
  // - loading: indicates if registration is in progress
  // - setLoading: function to manually update loading state
  // - onFinish: function to handle form submission
  // - handleGoogleLogin: function to handle Google OAuth login
  const { loading, setLoading, onFinish, handleGoogleLogin } = useRegister();

  return (
    // Full-screen container centered both vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">

      {/* Card container for the registration form and buttons */}
      <Card className="w-full max-w-md shadow-lg">

        {/* Header section with title and description */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Sign up to get started</p>
        </div>

        {/* Registration form component */}
        <RegisterForm onFinish={onFinish} loading={loading} />

        {/* Divider between form and Google login button */}
        <Divider>Or</Divider>

        {/* Google OAuth registration button */}
        <Button 
          icon={<GoogleOutlined />}        // Google icon
          onClick={handleGoogleLogin}      // Calls Google login function
          loading={loading}                // Shows loading spinner while processing
          block                            // Full-width button
          size="large"                     // Large button size
        >
          Continue with Google
        </Button>

        {/* Footer section with link to login page */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="text-primary hover:text-accent font-medium">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

// Exporting Register component for use in routes
export default Register;