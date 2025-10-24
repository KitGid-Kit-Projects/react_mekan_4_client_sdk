// Import UI components and utilities from Ant Design library
import { Layout, Card, Form, Input, Button, InputNumber, Space } from 'antd';
// Import icons for visual representation on buttons
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Destructure Layout component to use only 'Content'
const { Content } = Layout;

// Define the interface for props
interface AddUserContentProps {
  form: any;
  onFinish: (values: any) => void;
  onCancel: () => void;
  loading: boolean;
}

// Functional component definition for adding a new user
const AddUserContent = ({ form, onFinish, onCancel, loading }: AddUserContentProps) => {

  return (
    // Layout Content area with padding and muted background
    <Content className="p-6 bg-gray-50 min-h-screen">
      {/* Container to center and limit width of content */}
      <div className="max-w-2xl mx-auto">

        {/* Navigation button to go back to the Users page */}
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onCancel}
          className="mb-6"
        >
          Back to Users
        </Button>

        {/* Card to visually group the form content */}
        <Card>
          {/* Page title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Add User Data
          </h1>

          {/* Ant Design Form component to handle input fields and submission */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            size="large"
            autoComplete="off"
          >

            {/* Input field for user's name - FIXED: using displayName to match hook */}
            <Form.Item
              label="Name"
              name="displayName"
              rules={[{ 
                required: true, 
                message: 'Please enter name' 
              }]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>

            {/* Input field for user's age */}
            <Form.Item
              label="Age"
              name="age"
              rules={[{ 
                required: true, 
                message: 'Please enter age',
                type: 'number',
                min: 1,
                max: 120
              }]}
            >
              <InputNumber
                placeholder="Enter age"
                min={1}
                max={120}
                className="w-full"
              />
            </Form.Item>

            {/* Input field for user's city */}
            <Form.Item
              label="City"
              name="city"
              rules={[{ 
                required: true, 
                message: 'Please enter city' 
              }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>

            {/* Optional field for user's photo URL */}
            <Form.Item
              label="Photo URL (Optional)"
              name="photoURL"
            >
              <Input placeholder="Enter photo URL" />
            </Form.Item>

            {/* Submit button for saving user data */}
            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SaveOutlined />}
                  size="large"
                >
                  Save User Data
                </Button>
                <Button
                  onClick={onCancel}
                  disabled={loading}
                  size="large"
                >
                  Cancel
                </Button>
              </Space>
            </Form.Item>

          </Form>
        </Card>
      </div>
    </Content>
  );
};

// Export component for use in other parts of the app
export default AddUserContent;