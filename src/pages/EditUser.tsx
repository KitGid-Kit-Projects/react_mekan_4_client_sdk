import { Layout,  Spin, } from 'antd';

// Import custom navigation bar component
import Navbar from '../components/Navbar';
import useEditUser from '@/hooks/useEditUser';
import EditUserContent from '@/components/EditUserContent';

// Extract Content component from Layout for convenience
const { Content } = Layout;

const EditUser = () => {

const { fetching,navigate,form,onFinish,loading}=useEditUser()
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
      <EditUserContent navigate={navigate} form={form} onFinish={onFinish} loading={loading}/>
    </Layout>
  );
};

// Export component for use in routing
export default EditUser;
