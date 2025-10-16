// Import required UI components from Ant Design for layout and form creation
import { Layout, Card, Form, Input, Button, message, Spin, InputNumber } from 'antd';
// Import useful icons from Ant Design for navigation and save actions
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Extract Content component from Layout for simpler usage
const { Content } = Layout;

// Define the EditUserContent functional component
// Receives navigation function, form instance, submit handler, and loading state as props
const EditUserContent = ({ navigate, form, onFinish, loading }) => {
  return (
    <Content className="p-6 bg-muted">
      {/* Center content and limit width for better readability */}
      <div className="max-w-2xl mx-auto">
        {/* Back button to navigate to the user list page */}
        <Button 
          icon={<ArrowLeftOutlined />}       // Left arrow icon
          onClick={() => navigate('/users')} // Navigate back on click
          className="mb-6"                   // Margin below for spacing
        >
          Back to Users
        </Button>

        {/* Main card container holding the edit form */}
        <Card>
          {/* Page heading */}
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Edit User Data
          </h1>

          {/* Ant Design form for editing user data */}
          <Form
            form={form}           // Connect form to passed Form instance
            layout="vertical"     // Use vertical alignment for labels and inputs
            onFinish={onFinish}   // Handle form submission
            size="large"          // Make input fields visually larger
          >
            {/* Name input field */}
            <Form.Item
              label="Name" // Field label
              name="displayName" // Field name (key)
              rules={[{ required: true, message: 'Please enter name' }]} // Validation rule
            >
              <Input placeholder="Enter name" />
            </Form.Item>

            {/* Age input field */}
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please enter age' }]}
            >
              <InputNumber 
                placeholder="Enter age"
                min={1}               // Minimum allowed age
                max={120}             // Maximum allowed age
                className="w-full"    // Make input take full width
              />
            </Form.Item>

            {/* City input field */}
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please enter city' }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>

            {/* Optional photo URL field for user profile picture */}
            <Form.Item
              label="Photo URL (Optional)"
              name="photoURL"
            >
              <Input placeholder="Enter photo URL" />
            </Form.Item>

            {/* Submit button for saving updated user data */}
            <Form.Item>
              <Button 
                type="primary"           // Primary style button
                htmlType="submit"        // Submit action type
                loading={loading}        // Display spinner while loading
                icon={<SaveOutlined />}  // Save icon for clarity
                block                    // Full-width button
                size="large"              // Larger button size for emphasis
              >
                Update User Data
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Content>
  );
};

// Export the EditUserContent component for use in EditUser page
export default EditUserContent;