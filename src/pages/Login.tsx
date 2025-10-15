// Import necessary React hooks and libraries
import { useState, useEffect } from 'react'; // useState for managing local state, useEffect for side effects
import { useNavigate, Link } from 'react-router-dom'; // Navigation and linking for routing
import { useAuth } from '../context/AuthContext'; // Custom authentication context providing login methods and user info
import { Form, Input, Button, Card, Divider } from 'antd'; // Ant Design UI components
import { GoogleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'; // Ant Design icons for styling inputs/buttons

// Define the Login component
const Login = () => {
  // Local state for loading indicator (e.g., showing spinner while logging in)
  const [loading, setLoading] = useState(false);

  // Destructure authentication methods and user from AuthContext
  const { login, loginWithGoogle, user } = useAuth();

  // Hook for navigating programmatically between routes
  const navigate = useNavigate();

  // Effect: if the user is already logged in, redirect to dashboard
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]); // Runs when `user` or `navigate` changes

  // Function triggered when form is successfully submitted
  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true); // Start loading state
    try {
      await login(values.email, values.password); // Call login function from AuthContext
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (error) {
      console.error(error); // Log error for debugging
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Function for handling Google sign-in
  const handleGoogleLogin = async () => {
    setLoading(true); // Start loading state
    try {
      await loginWithGoogle(); // Call Google login method from AuthContext
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (error) {
      console.error(error); // Log any errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

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
        <Form
          name="login"              // Form name identifier
          onFinish={onFinish}       // Callback when form is submitted successfully
          layout="vertical"         // Vertical label-input layout
          size="large"              // Larger input/button sizes
        >
          {/* Email input field */}
          <Form.Item
            name="email"
            rules={[                 // Validation rules
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input
              prefix={<MailOutlined />} // Email icon before input
              placeholder="Email"       // Placeholder text
            />
          </Form.Item>

          {/* Password input field */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]} // Validation rule
          >
            <Input.Password
              prefix={<LockOutlined />} // Lock icon before input
              placeholder="Password"    // Placeholder text
            />
          </Form.Item>

          {/* Forgot password link aligned to the right */}
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-primary hover:text-accent">
              Forgot password?
            </Link>
          </div>

          {/* Submit button for signing in */}
          <Form.Item>
            <Button
              type="primary"      // Primary (blue) button
              htmlType="submit"   // Submits the form
              loading={loading}   // Shows loading spinner when `loading` is true
              block               // Full width
              size="large"        // Large button
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

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