// Import React hooks for state and lifecycle management
import { useState, useEffect } from 'react';
// Import navigation and route parameter utilities from react-router-dom
import { useNavigate, useParams } from 'react-router-dom';
// Import Firestore functions for document operations
import { doc, getDoc, updateDoc } from 'firebase/firestore';
// Import database instance from Firebase configuration
import { db } from '../../firebase';
// Import Ant Design UI components
import { Layout, Card, Form, Input, Button, message, Spin, InputNumber } from 'antd';
// Import icons from Ant Design
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// Import custom navigation bar component
import Navbar from '../../components/Navbar';

// Extract Content component from Layout for convenience
const { Content } = Layout;

const EditUser = () => {
  // Get user ID from URL parameters
  const { id } = useParams();
  // Hook for navigation between pages
  const navigate = useNavigate();
  // Create form instance for Ant Design Form component
  const [form] = Form.useForm();
  // State for submit button loading indicator
  const [loading, setLoading] = useState(false);
  // State for initial data fetching indicator
  const [fetching, setFetching] = useState(true);

  // useEffect runs when component mounts or 'id' changes
  useEffect(() => {
    loadUser();
  }, [id]);

  // Function to fetch user data from Firestore
  const loadUser = async () => {
    // Stop if no user ID found
    if (!id) return;

    try {
      // Reference to specific user document in Firestore
      const docRef = doc(db, 'usersData', id);
      // Fetch the document snapshot
      const docSnap = await getDoc(docRef);

      // If document exists, populate form fields with data
      if (docSnap.exists()) {
        const data = docSnap.data();
        form.setFieldsValue({
          displayName: data.displayName,
          age: data.age,
          city: data.city,
          photoURL: data.photoURL
        });
      } else {
        // If no user found, show error and redirect back to users page
        message.error('User not found');
        navigate('/users');
      }
    } catch (error: any) {
      // Handle Firestore or network error
      message.error('Failed to load user data');
    } finally {
      // Stop the loading spinner once done
      setFetching(false);
    }
  };

  // Function triggered when form is submitted successfully
  const onFinish = async (values: any) => {
    // Stop if user ID is missing
    if (!id) return;

    setLoading(true); // Show loading indicator on button
    try {
      // Get reference to user document
      const docRef = doc(db, 'usersData', id);
      // Update user data in Firestore with form values
      await updateDoc(docRef, {
        displayName: values.displayName,
        age: values.age,
        city: values.city,
        photoURL: values.photoURL || '' // Default to empty string if undefined
      });

      // Show success message and navigate back
      message.success('User data updated successfully!');
      navigate('/users');
    } catch (error: any) {
      // Show error if update fails
      message.error('Failed to update user data');
    } finally {
      // Stop button loading indicator
      setLoading(false);
    }
  };

  // Show loading spinner while fetching user data
  if (fetching) {
    return (
      <Layout className="min-h-screen">
        <Navbar />
        <Content className="flex items-center justify-center">
          <Spin size="large" /> {/* Spinner while data is being fetched */}
        </Content>
      </Layout>
    );
  }

  // Main form UI
  return (
    <Layout className="min-h-screen">
      {/* Navbar displayed at top */}
      <Navbar />
      <Content className="p-6 bg-muted">
        {/* Center content with limited width */}
        <div className="max-w-2xl mx-auto">
          {/* Back button to return to users list */}
          <Button 
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          {/* Main card container for form */}
          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Edit User Data
            </h1>

            {/* Ant Design form for editing user info */}
            <Form
              form={form} // Link with form instance
              layout="vertical" // Vertical form layout
              onFinish={onFinish} // Function to handle submission
              size="large" // Large input size
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
                  loading={loading} // Show spinner while updating
                  icon={<SaveOutlined />} // Save icon
                  block // Full width button
                  size="large"
                >
                  Update User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

// Export component for use in routing
export default EditUser;
