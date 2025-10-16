// Import necessary components and hooks from external libraries
import { Layout } from 'antd'; // Ant Design Layout component for structured page design

// Import custom components and hooks
import Navbar from '../components/Navbar'; // Top navigation bar component
import useDashBoard from '@/hooks/useDashBoard'; // Custom hook that manages dashboard logic and data
import DashBoardContent from '@/components/DashBoardContent'; // Component that displays the main dashboard content

// Destructure Content from Ant Design’s Layout for cleaner JSX
const { Content } = Layout;

// Dashboard component definition
const Dashboard = () => {
  // Destructure values returned from the custom dashboard hook
  // userProfile → user info (name, role, etc.)
  // navigate → function for programmatic navigation
  // quickActions → shortcuts or buttons for fast access to dashboard features
  const { userProfile, navigate, quickActions } = useDashBoard();

  return (
    // Layout component to define the overall structure of the page
    <Layout className="min-h-screen"> {/* Ensures the layout takes full screen height */}
      
      {/* Top navigation bar */}
      <Navbar />

      {/* Main dashboard content, passed as props to a reusable component */}
      <DashBoardContent 
        userProfile={userProfile}     // Pass user information to content
        quickActions={quickActions}   // Pass quick action items
        navigate={navigate}           // Pass navigation handler
      />
    </Layout>
  );
};

// Export the Dashboard component for use in routes or other components
export default Dashboard;
