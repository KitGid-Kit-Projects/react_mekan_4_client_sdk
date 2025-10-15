// Import necessary React hooks and modules
import { useState } from 'react'; // Hook for managing component state
import { Link } from 'react-router-dom'; // For navigation links
import { useAuth } from '../context/AuthContext'; // Custom auth context for password reset functionality
import { Form, Input, Button, Card } from 'antd'; // Ant Design components for UI
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons'; // Icons for form inputs and navigation

// Define the ForgotPassword component
const ForgotPassword = () => {
  const [loading, setLoading] = useState(false); // State to control loading spinner during async actions
  const [emailSent, setEmailSent] = useState(false); // State to track whether reset email has been sent
  const { resetPassword } = useAuth(); // Get the password reset function from AuthContext

  // Handler for form submission
  const onFinish = async (values: { email: string }) => {
    setLoading(true); // Start loading indicator
    try {
      await resetPassword(values.email); // Call the password reset function with the email
      setEmailSent(true); // Mark email as sent to update UI message
    } catch (error) {
      console.error(error); // Log any errors that occur
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  // JSX returned by the component
  return (
    // Main wrapper: centers card vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">
      {/* Card container for the form and messages */}
      <Card className="w-full max-w-md shadow-lg">
        {/* Header section with title and instructions */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
          <p className="text-muted-foreground">
            {/* Conditional message: depends on whether email has been sent */}
            {emailSent 
              ? 'Check your email for reset instructions' // Message after sending email
              : 'Enter your email to reset your password'  // Default message before sending
            }
          </p>
        </div>

        {/* Conditional rendering: show form if email not sent yet */}
        {!emailSent ? (
          // Ant Design form setup
          <Form
            name="forgot-password"   // Form name
            onFinish={onFinish}      // Function to run on form submit
            layout="vertical"        // Vertical form layout
            size="large"             // Large input and button sizes
          >
            {/* Email input field */}
            <Form.Item
              name="email"
              rules={[                // Validation rules for email field
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} // Email icon
                placeholder="Email"       // Placeholder text
              />
            </Form.Item>

            {/* Submit button */}
            <Form.Item>
              <Button 
                type="primary"       // Primary (blue) button
                htmlType="submit"    // Submits form when clicked
                loading={loading}    // Shows spinner when loading is true
                block                // Full width
                size="large"         // Large button size
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
        ) : (
          // Shown after reset email is sent
          <div className="text-center py-4">
            <Button 
              type="primary"              // Primary button
              onClick={() => setEmailSent(false)} // Allows resending by resetting the emailSent state
              size="large"                // Large button
            >
              Send Again
            </Button>
          </div>
        )}

        {/* Footer section with link back to login */}
        <div className="text-center mt-6">
          <Link 
            to="/login" // Navigate to login page
            className="text-primary hover:text-accent inline-flex items-center gap-2"
          >
            <ArrowLeftOutlined /> {/* Left arrow icon */}
            Back to Login          {/* Text for navigation */}
          </Link>
        </div>
      </Card>
    </div>
  );
};

// Export component so it can be used elsewhere
export default ForgotPassword;