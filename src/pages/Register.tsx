// Import necessary hooks and components
import { useState, useEffect } from 'react'; // React hooks for managing state and side effects
import { useNavigate, Link } from 'react-router-dom'; // Navigation and linking for routing
import { useAuth } from '../context/AuthContext'; // Custom authentication context (register, Google login, etc.)
import { Form, Input, Button, Card, Divider } from 'antd'; // Ant Design UI components
import { GoogleOutlined, MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'; // Icons for inputs and buttons

// Define the Register component
const Register = () => {
  const [loading, setLoading] = useState(false); // Local state for loading spinner
  const { register, loginWithGoogle, user } = useAuth(); // Extract auth methods and user object from context
  const navigate = useNavigate(); // Hook to programmatically navigate between pages

  // Redirect to dashboard if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Navigate to dashboard if user exists
    }
  }, [user, navigate]); // Runs when user or navigate changes

  // Handle form submission
  const onFinish = async (values: { email: string; password: string; displayName: string }) => {
    setLoading(true); // Start loading state
    try {
      await register(values.email, values.password, values.displayName); // Call register function from AuthContext
      navigate('/dashboard'); // Redirect to dashboard after successful registration
    } catch (error) {
      console.error(error); // Log error if registration fails
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    setLoading(true); // Start loading spinner
    try {
      await loginWithGoogle(); // Call Google login method
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error(error); // Log any errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Component UI
  return (
    // Center the card both vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">
      {/* Card container for the form */}
      <Card className="w-full max-w-md shadow-lg">
        {/* Header text */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Sign up to get started</p>
        </div>

        {/* Registration form */}
        <Form
          name="register"         // Form name
          onFinish={onFinish}     // Handler when form is submitted successfully
          layout="vertical"       // Vertical layout for labels and inputs
          size="large"            // Larger input and button sizes
        >
          {/* Full Name input field */}
          <Form.Item
            name="displayName"    // Field name in form values
            rules={[{ required: true, message: 'Please enter your name' }]} // Validation rule
          >
            <Input
              prefix={<UserOutlined />} // User icon before input
              placeholder="Full Name"   // Placeholder text
            />
          </Form.Item>

          {/* Email input field */}
          <Form.Item
            name="email"
            rules={[ // Validation rules for email
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input
              prefix={<MailOutlined />}  // Mail icon before input
              placeholder="Email"        // Placeholder text
            />
          </Form.Item>

          {/* Password input field */}
          <Form.Item
            name="password"
            rules={[ // Validation for password
              { required: true, message: 'Please enter your password' },
              { min: 6, message: 'Password must be at least 6 characters' } // Minimum length rule
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}  // Lock icon before input
              placeholder="Password"     // Placeholder text
            />
          </Form.Item>

          {/* Confirm password input field */}
          <Form.Item
            name="confirmPassword"       // Field name
            dependencies={['password']}  // Depend on password field for validation
            rules={[                    // Validation rules
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({  // Custom validator function
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) { // Check if passwords match
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match')); // Return error if mismatch
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}  // Lock icon before input
              placeholder="Confirm Password" // Placeholder text
            />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button
              type="primary"      // Primary (blue) button
              htmlType="submit"   // Submit type triggers form submission
              loading={loading}   // Show loading spinner if loading
              block               // Full width button
              size="large"        // Large button
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        {/* Divider between email/password registration and Google login */}
        <Divider>Or</Divider>

        {/* Google login button */}
        <Button
          icon={<GoogleOutlined />} // Google icon
          onClick={handleGoogleLogin} // Trigger Google login handler
          loading={loading}           // Show spinner while logging in
          block                       // Full width button
          size="large"                // Large button
        >
          Continue with Google
        </Button>

        {/* Footer: link to login page */}
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

// Export component to be used elsewhere
export default Register;