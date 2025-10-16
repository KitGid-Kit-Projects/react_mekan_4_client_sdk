// Import necessary React hooks and libraries
import { useState, useEffect } from 'react'; // useState for managing local state, useEffect for side effects
import { useNavigate, Link } from 'react-router-dom'; // Navigation and linking for routing
import { useAuth } from '../context/AuthContext'; // Custom authentication context providing login methods and user info
import { Form, Input, Button, Card, Divider } from 'antd'; // Ant Design UI components
import { GoogleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'; // Ant Design icons for styling inputs/buttons
import useLogin from '@/hooks/useLogin';
import LoginForm from '@/components/LoginForm';

// Define the Login component
const Login = () => {
const {
    loading, setLoading,navigate,onFinish,handleGoogleLogin
}=useLogin()
  // JSX: what gets rendered to the UI
  return (
    // Center the login card vertically and horizontally on the screen
    <div className="flex items-center justify-center min-h-screen bg-muted">
      {/* Card container for the login form */}
      <Card className="w-full max-w-md shadow-lg">
        {/* Header section with title and subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Ant Design Form for login inputs */}
    <LoginForm    onFinish={onFinish}
    loading={loading}/>

        {/* Divider line with "Or" text */}
        <Divider>Or</Divider>

        {/* Google login button */}
        <Button
          icon={<GoogleOutlined />}  // Google icon
          onClick={handleGoogleLogin} // Calls Google login handler
          loading={loading}          // Shows spinner while loading
          block                      // Full width
          size="large"               // Large button
        >
          Continue with Google
        </Button>

        {/* Footer section with sign-up link */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/register" className="text-primary hover:text-accent font-medium">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
};

// Export the component so it can be imported elsewhere
export default Login;