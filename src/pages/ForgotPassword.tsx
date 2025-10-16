// Importing React useState hook (though not used directly here) and Link for navigation
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing Ant Design components for UI
import { Form, Input, Button, Card } from 'antd';

// Importing Ant Design icons used in the form
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Importing custom hook that handles forgot password logic
import useForgot from '@/hooks/useForgot';

// Defining the ForgotPassword component
const ForgotPassword = () => {
  // Destructuring state and functions from the useForgot custom hook
  const { loading, setLoading, emailSent, setEmailSent, onFinish } = useForgot();

  return (
    // Full-screen container centered both vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">

      {/* Card component for form layout */}
      <Card className="w-full max-w-md shadow-lg">
        
        {/* Header section with title and description */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>

          {/* Conditional description based on whether email has been sent */}
          <p className="text-muted-foreground">
            {emailSent 
              ? 'Check your email for reset instructions'
              : 'Enter your email to reset your password'
            }
          </p>
        </div>

        {/* Conditional rendering: show form if email not sent, otherwise show "Send Again" button */}
        {!emailSent ? (
          <Form
            name="forgot-password"  // Form identifier
            onFinish={onFinish}     // Function called on successful form submission
            layout="vertical"       // Vertical label layout
            size="large"            // Large input size
          >
            {/* Email input field */}
            <Form.Item
              name="email"          // Field key
              rules={[
                { required: true, message: 'Please enter your email' },  // Required field validation
                { type: 'email', message: 'Please enter a valid email' } // Valid email format validation
              ]}
            >
              <Input 
                prefix={<MailOutlined />}  // Mail icon before input
                placeholder="Email"       // Placeholder text
              />
            </Form.Item>

            {/* Submit button */}
            <Form.Item>
              <Button 
                type="primary"        // Primary colored button
                htmlType="submit"     // Submit the form on click
                loading={loading}     // Show loading spinner while processing
                block                 // Full-width button
                size="large"          // Large button size
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
        ) : (
          // After email sent: show "Send Again" button
          <div className="text-center py-4">
            <Button 
              type="primary" 
              onClick={() => setEmailSent(false)} // Reset emailSent to allow resending
              size="large"
            >
              Send Again
            </Button>
          </div>
        )}

        {/* Link back to login page */}
        <div className="text-center mt-6">
          <Link 
            to="/login" 
            className="text-primary hover:text-accent inline-flex items-center gap-2"
          >
            <ArrowLeftOutlined />  {/* Left arrow icon */}
            Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

// Exporting the ForgotPassword component
export default ForgotPassword;