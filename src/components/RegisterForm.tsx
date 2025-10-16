// Importing required icons from Ant Design for input prefixes
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

// Importing UI components from Ant Design
import { Button, Form, Input } from "antd";

// Defining the RegisterForm component
// Props:
// - onFinish → function called when form is submitted successfully
// - loading → boolean for showing a loading state on the submit button
const RegisterForm = ({ onFinish, loading }) => {
  return (
    // Ant Design Form component for registration
    <Form
      name="register"         // Form name identifier
      onFinish={onFinish}     // Function to execute after form validation passes
      layout="vertical"       // Vertical layout for input labels
      size="large"            // Large size inputs and buttons
    >

      {/* Full Name Input Field */}
      <Form.Item
        name="displayName" // Field key
        rules={[
          { required: true, message: 'Please enter your name' } // Validation rule: required
        ]}
      >
        {/* Input field with user icon */}
        <Input
          prefix={<UserOutlined />}   // Icon shown before input text
          placeholder="Full Name"     // Placeholder text
        />
      </Form.Item>

      {/* Email Input Field */}
      <Form.Item
        name="email" // Field key
        rules={[
          { required: true, message: 'Please enter your email' }, // Required field rule
          { type: 'email', message: 'Please enter a valid email' } // Must be a valid email format
        ]}
      >
        {/* Input field with mail icon */}
        <Input 
          prefix={<MailOutlined />} 
          placeholder="Email" 
        />
      </Form.Item>

      {/* Password Input Field */}
      <Form.Item
        name="password" // Field key
        rules={[
          { required: true, message: 'Please enter your password' }, // Required rule
          { min: 6, message: 'Password must be at least 6 characters' } // Minimum length validation
        ]}
      >
        {/* Password input with lock icon */}
        <Input.Password 
          prefix={<LockOutlined />} 
          placeholder="Password" 
        />
      </Form.Item>

      {/* Confirm Password Input Field */}
      <Form.Item
        name="confirmPassword"  // Field key
        dependencies={['password']} // Depends on the "password" field for validation
        rules={[
          { required: true, message: 'Please confirm your password' }, // Required rule
          // Custom validator to check if passwords match
          ({ getFieldValue }) => ({
            validator(_, value) {
              // If confirmPassword is empty or matches password → valid
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              // Otherwise → show error
              return Promise.reject(new Error('Passwords do not match'));
            },
          }),
        ]}
      >
        {/* Confirm password input with lock icon */}
        <Input.Password 
          prefix={<LockOutlined />} 
          placeholder="Confirm Password" 
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button 
          type="primary"        // Primary color button
          htmlType="submit"     // Submits the form
          loading={loading}     // Shows loading spinner when true
          block                 // Makes the button full width
          size="large"          // Large button size
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

// Exporting the component for use in other files
export default RegisterForm;