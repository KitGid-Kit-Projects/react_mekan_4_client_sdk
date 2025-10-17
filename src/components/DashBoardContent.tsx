// Import Ant Design components for layout, cards, buttons, and statistics
import { Button, Card, Col, Layout, Row, Statistic } from "antd";
// Import icon for button
import { PlusOutlined } from '@ant-design/icons';

// Destructure Content component from Layout
const { Content } = Layout;

// Dashboard content component receives userProfile, quickActions, and navigate function as props
const DashBoardContent = ({ userProfile, quickActions, navigate }) => {
  return (
    // Main content area with padding and background
    <Content className="p-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Welcome message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome, {userProfile?.displayName}!
          </h1>
          <p className="text-lg text-muted-foreground">
            {/* Show admin or user dashboard label */}
            {userProfile?.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
          </p>
        </div>

        {/* Row for user statistics */}
        <Row gutter={[24, 24]} className="mb-8">
          {/* Role card */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Your Role"
                value={userProfile?.role}
                valueStyle={{ color: '#1890ff', textTransform: 'capitalize' }}
              />
            </Card>
          </Col>

          {/* Account status card */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic 
                title="Account Status" 
                value="Active"
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>

          {/* Member since card */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic 
                title="Member Since" 
                value={new Date(userProfile?.createdAt || Date.now()).toLocaleDateString()}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick actions section */}
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
        <Row gutter={[24, 24]}>
          {/* Map through quickActions and render cards */}
          {quickActions.map((action, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                hoverable
                className="h-full"
                onClick={() => navigate(action.path)} // Navigate to action path on click
              >
                <div className="text-center">
                  <div className="mb-4">{action.icon}</div> {/* Action icon */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {action.title} {/* Action title */}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {action.description} {/* Action description */}
                  </p>
                  <Button type="primary" icon={<PlusOutlined />}>
                    Go {/* Button to trigger action */}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  );
};

// Export the dashboard content component
export default DashBoardContent;
