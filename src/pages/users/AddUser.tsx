// Import React hook for managing component state
import { useState } from 'react';
// Import navigation hook for redirecting between pages
import { useNavigate } from 'react-router-dom';
// Import authentication context to get current user
import { useAuth } from '../../context/AuthContext';
// Import Firebase Firestore functions for writing data
import { doc, setDoc } from 'firebase/firestore';
// Import Firestore instance from your Firebase config
import { db } from '../../firebase';
// Import UI components and utilities from Ant Design
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
// Import icons for button visuals
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// Import Navbar component for consistent layout
import Navbar from '../../components/Navbar';

// Destructure Layout for convenience
const { Content } = Layout;

// Define the AddUser functional component
const AddUser = () => {
  // Access the authenticated user
  const { user } = useAuth();
  // Initialize the navigate function for page redirection
  const navigate = useNavigate();
  // Initialize Ant Design form instance
  const [form] = Form.useForm();
  // State for tracking loading status
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const onFinish = async (values: any) => {
    // Exit if user is not authenticated
    if (!user) return;

    setLoading(true); // Start loading indicator
    try {
      // Create or overwrite document with user's UID as ID
      await setDoc(doc(db, 'usersData', user.uid), {
        uid: user.uid, // Unique user ID
        displayName: values.displayName, // User name
        age: values.age, // User age
        city: values.city, // User city
        photoURL: values.photoURL || '', // Optional photo URL
        createdAt: new Date(), // Store timestamp for creation
      });

      // Notify success and navigate to user list
      message.success('User data added successfully!');
      navigate('/users');
    } catch (error: any) {
      // Log error for debugging and show UI message
      console.error(error);
      message.error('Failed to add user data');
    } finally {
      // Stop loading indicator
      setLoading(false);
    }
  };

  // JSX structure for rendering the page
  return (
    <Layout className="min-h-screen">
      {/* Top navigation bar */}
      <Navbar />

      <Content className="p-6 bg-muted">
        <div className="max-w-2xl mx-auto">
          {/* Back button for navigation */}
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          {/* Card container for form */}
          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Add User Data
            </h1>

            {/* Ant Design form for user input */}
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              {/* Name field */}
              <Form.Item
                label="Name"
                name="displayName"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>

              {/* Age field */}
              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please enter age' }]}
              >
                <InputNumber
                  placeholder="Enter age"
                  min={1}
                  max={120}
                  className="w-full"
                />
              </Form.Item>

              {/* City field */}
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please enter city' }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>

              {/* Optional photo URL field */}
              <Form.Item
                label="Photo URL (Optional)"
                name="photoURL"
              >
                <Input placeholder="Enter photo URL" />
              </Form.Item>

              {/* Submit button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SaveOutlined />}
                  block
                  size="large"
                >
                  Save User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

// Export the AddUser component as default
export default AddUser;
