
// Import UI components and utilities from Ant Design
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
// Import icons for button visuals
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// Import Navbar component for consistent layout
import Navbar from '../components/Navbar';
import useAddUser from '@/hooks/useAddUser';
import AddUserContent from '@/components/AddUserContent';

// Destructure Layout for convenience
const { Content } = Layout;

// Define the AddUser functional component
const AddUser = () => {
const {user,navigate,form,loading,setLoading,onFinish}=useAddUser()
  // JSX structure for rendering the page
  return (
    <Layout className="min-h-screen">
      {/* Top navigation bar */}
      <Navbar />

    <AddUserContent navigate={navigate} form={form} onFinish={onFinish} loading={loading} />
    </Layout>
  );
};

// Export the AddUser component as default
export default AddUser;