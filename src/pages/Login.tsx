// Import necessary React hooks and libraries
import { Form, Input, Button, Card, Divider } from 'antd'; // Ant Design UI components
import { GoogleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'; // Ant Design icons for styling inputs/buttons
import { Link } from 'react-router-dom'; // Linking for routing
import useLogin from '@/hooks/useLogin';

// Define the Login component
const Login = () => {
const {
    loading,onFinish,handleGoogleLogin
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