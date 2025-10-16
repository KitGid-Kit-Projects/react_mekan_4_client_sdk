// Import UI components and utilities from Ant Design library
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
// Import icons for visual representation on buttons
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Destructure Layout component to use only 'Content'
const { Content } = Layout;

// Functional component definition for adding a new user
const AddUserContent = ({ navigate, form, onFinish, loading }) => {

  return (
    // Layout Content area with padding and muted background
    <Content className="p-6 bg-muted">
      {/* Container to center and limit width of content */}
      <div className="max-w-2xl mx-auto">

        {/* Navigation button to go back to the Users page */}
        <Button
          icon={<ArrowLeftOutlined />} // Left arrow icon for back navigation
          onClick={() => navigate('/users')} // Navigate to /users when clicked
          className="mb-6" // Margin bottom for spacing
        >
          Back to Users
        </Button>

        {/* Card to visually group the form content */}
        <Card>
          {/* Page title */}
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Add User Data
          </h1>

          {/* Ant Design Form component to handle input fields and submission */}
          <Form
            form={form} // Form instance for control
            layout="vertical" // Vertical layout for labels and inputs
            onFinish={onFinish} // Function to call on form submission
            size="large" // Larger input and button sizes
          >

            {/* Input field for user's name */}
            <Form.Item
              label="Name" // Label shown above input
              name="displayName" // Key used to store value
              rules={[{ required: true, message: 'Please enter name' }]} // Validation rule
            >
              <Input placeholder="Enter name" /> {/* Input box for name */}
            </Form.Item>

            {/* Input field for user's age */}
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please enter age' }]}
            >
              {/* Numeric input for age with constraints */}
              <InputNumber
                placeholder="Enter age"
                min={1} // Minimum value
                max={120} // Maximum value
                className="w-full" // Full width styling
              />
            </Form.Item>

            {/* Input field for user's city */}
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please enter city' }]}
            >
              <Input placeholder="Enter city" /> {/* Input box for city */}
            </Form.Item>

            {/* Optional field for user's photo URL */}
            <Form.Item
              label="Photo URL (Optional)"
              name="photoURL"
            >
              <Input placeholder="Enter photo URL" /> {/* Input box for photo URL */}
            </Form.Item>

            {/* Submit button for saving user data */}
            <Form.Item>
              <Button
                type="primary" // Primary color button
                htmlType="submit" // Triggers form submission
                loading={loading} // Shows loading spinner when true
                icon={<SaveOutlined />} // Save icon
                block // Makes button take full width
                size="large" // Larger button size
              >
                Save User Data
              </Button>
            </Form.Item>

          </Form>
        </Card>
      </div>
    </Content>
  );
};

// Export component for use in other parts of the app
export default AddUserContent;