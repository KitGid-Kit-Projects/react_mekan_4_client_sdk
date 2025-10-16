// Importing necessary icons from Ant Design
import { LockOutlined, MailOutlined } from "@ant-design/icons";

// Importing UI components from Ant Design
import { Button, Form, Input } from "antd";

// Importing Link for navigation between routes
import { Link } from 'react-router-dom';

// Defining the LoginForm component
// It takes two props: 
// - onFinish → function to handle form submission
// - loading → boolean indicating loading state (for submit button)
const LoginForm = ({ onFinish, loading }) => {
  return (
    // Ant Design Form component for handling login input and validation
    <Form
      name="login"           // Name identifier for the form
      onFinish={onFinish}    // Function to call when the form is successfully submitted
      layout="vertical"      // Vertical layout for labels and fields
      size="large"           // Large input and button size
    >
      {/* Email input field */}
      <Form.Item
        name="email" // Field name (used by Ant Design for validation and value storage)
        rules={[
          { required: true, message: 'Please enter your email' }, // Required field rule
          { type: 'email', message: 'Please enter a valid email' } // Must be a valid email format
        ]}
      >
        {/* Input with Mail icon prefix and placeholder text */}
        <Input 
          prefix={<MailOutlined />} 
          placeholder="Email" 
        />
      </Form.Item>

      {/* Password input field */}
      <Form.Item
        name="password" // Field name
        rules={[
          { required: true, message: 'Please enter your password' } // Required field rule
        ]}
      >
        {/* Password input with lock icon and placeholder text */}
        <Input.Password 
          prefix={<LockOutlined />} 
          placeholder="Password" 
        />
      </Form.Item>

      {/* "Forgot password?" link aligned to the right */}
      <div className="text-right mb-4">
        <Link 
          to="/forgot-password" // Navigates to forgot password page
          className="text-primary hover:text-accent"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit button for form submission */}
      <Form.Item>
        <Button
          type="primary"       // Primary button color
          htmlType="submit"    // Submits the form when clicked
          loading={loading}    // Displays loading spinner when true
          block                // Makes the button full width
          size="large"         // Large button size
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

// Exporting the LoginForm component as the default export
export default LoginForm;