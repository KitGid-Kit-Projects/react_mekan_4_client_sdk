// Import UI components and utilities from Ant Design
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
// Import icons for button visuals
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// Import Navbar component for consistent layout
import Navbar from '../components/Navbar';
// Import custom hook to manage Add User logic (form handling, navigation, etc.)
import useAddUser from '@/hooks/useAddUser';
// Import AddUserContent component that contains form fields and submit logic
import AddUserContent from '@/components/AddUserContent';

// Destructure Layout for cleaner usage
const { Content } = Layout;

// Define the AddUser functional component
const AddUser = () => {
  // Use the custom hook to access user data, navigation, form, loading state, and submission handler
  const { user, navigate, form, loading, setLoading, onFinish } = useAddUser();

  // JSX structure for rendering the Add User page
  return (
    <Layout className="min-h-screen">
      {/* Top navigation bar for consistent page layout */}
      <Navbar />

      {/* Main Add User content: includes form and submission logic */}
      <AddUserContent
        navigate={navigate}
        form={form}
        onFinish={onFinish}
        loading={loading}
      />
    </Layout>
  );
};

// Export the AddUser component as default for routing or import in other files
export default AddUser;