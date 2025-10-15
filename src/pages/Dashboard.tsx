// Import necessary hooks and components from libraries
import { useNavigate } from 'react-router-dom'; // Used for programmatic navigation
import { useAuth } from '../context/AuthContext'; // Custom hook to access authentication data
import { Layout, Card, Row, Col, Button, Statistic } from 'antd'; // UI components from Ant Design
import { 
  UserAddOutlined, 
  TeamOutlined, 
  UserOutlined,
  PlusOutlined 
} from '@ant-design/icons'; // Icons from Ant Design
import Navbar from '../components/Navbar'; // Custom navigation bar component

// Destructure Layout component to get Content for page layout
const { Content } = Layout;

const Dashboard = () => {
  // Get user profile data from Auth context
  const { userProfile } = useAuth();

  // Hook for navigation between routes
  const navigate = useNavigate();

  // Define a list of quick actions for dashboard cards
  const quickActions = [
    {
      title: 'Add User', // Title for card
      description: 'Create a new user profile', // Description text
      icon: <UserAddOutlined className="text-4xl text-primary" />, // Display icon
      path: '/users/add', // Path to navigate on click
      color: '#1890ff' // Theme color
    },
    {
      title: 'View Users',
      description: 'Browse all user profiles',
      icon: <TeamOutlined className="text-4xl text-primary" />,
      path: '/users',
      color: '#52c41a'
    },
    {
      title: 'My Profile',
      description: 'View and edit your profile',
      icon: <UserOutlined className="text-4xl text-primary" />,
      path: '/profile',
      color: '#faad14'
    }
  ];

  // Main JSX return (UI rendering)
  return (
    // Main layout wrapper, covers full screen height
    <Layout className="min-h-screen">
      {/* Navbar displayed at top of page */}
      <Navbar />

      {/* Content area with padding and background color */}
      <Content className="p-6 bg-muted">
        {/* Centered container with max width */}
        <div className="max-w-7xl mx-auto">
          
          {/* Welcome message section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {/* Display user's name dynamically */}
              Welcome, {userProfile?.displayName}!
            </h1>
            <p className="text-lg text-muted-foreground">
              {/* Show whether user is admin or regular user */}
              {userProfile?.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
            </p>
          </div>

          {/* Statistics cards section */}
          <Row gutter={[24, 24]} className="mb-8">
            {/* Display user's role */}
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Your Role" 
                  value={userProfile?.role} 
                  valueStyle={{ color: '#1890ff', textTransform: 'capitalize' }}
                />
              </Card>
            </Col>

            {/* Display account status (hardcoded as Active) */}
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Account Status" 
                  value="Active"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>

            {/* Display user account creation date */}
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Member Since" 
                  value={new Date(userProfile?.createdAt || Date.now()).toLocaleDateString()}
                />
              </Card>
            </Col>
          </Row>

          {/* Quick Actions Section */}
          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>

          {/* Loop through each quick action and render as card */}
          <Row gutter={[24, 24]}>
            {quickActions.map((action, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                {/* Card clickable area */}
                <Card 
                  hoverable // Adds hover effect
                  className="h-full" // Makes card height fill available space
                  onClick={() => navigate(action.path)} // Navigate to page on click
                >
                  <div className="text-center">
                    {/* Icon for action */}
                    <div className="mb-4">{action.icon}</div>

                    {/* Title text */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>

                    {/* Description text */}
                    <p className="text-muted-foreground mb-4">
                      {action.description}
                    </p>

                    {/* Button to navigate (visual element) */}
                    <Button type="primary" icon={<PlusOutlined />}>
                      Go
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

// Export the Dashboard component for use in routes
export default Dashboard;
