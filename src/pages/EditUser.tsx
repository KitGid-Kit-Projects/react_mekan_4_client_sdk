import { Layout, Spin } from 'antd';

// Import custom navigation bar component
import Navbar from '../components/Navbar';
// Import custom hook for user edit functionality
import useEditUser from '../hooks/useEditUser';
// Import content component that renders the user edit form
import EditUserContent from '../components/EditUserContent';

// Extract Content component from Layout for convenience
const { Content } = Layout;

const EditUser = () => {
  // Destructure needed values and functions from the custom hook
  const { fetching, navigate, form, onFinish, loading } = useEditUser();

  // Show loading spinner while user data is being fetched
  if (fetching) {
    return (
      <Layout className="min-h-screen">
        {/* Navigation bar displayed at the top */}
        <Navbar />
        <Content className="flex items-center justify-center">
          {/* Spinner shown while fetching data */}
          <Spin size="large" />
        </Content>
      </Layout>
    );
  }

  // Render the main edit user form UI
  return (
    <Layout className="min-h-screen">
      {/* Navbar displayed at top of the page */}
      <Navbar />

      {/* User edit form section */}
      <EditUserContent 
        navigate={navigate}  // Function for navigation (e.g., redirect after update)
        form={form}          // Ant Design form instance
        onFinish={onFinish}  // Function called when form is submitted
        loading={loading}    // Loading state for submit button
      />
    </Layout>
  );
};

// Export component for use in routes
export default EditUser;