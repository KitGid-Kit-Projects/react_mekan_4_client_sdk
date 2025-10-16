import { Button, Form, Input } from "antd"
import { MailOutlined } from '@ant-design/icons'; // Icons for form inputs and navigation
const ForgetPassWordEmail=({emailSent,onFinish,loading,setEmailSent})=>{

    return (
        <>
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
        </>
    )
}

export default ForgetPassWordEmail