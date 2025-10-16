// Import UI components from Ant Design
import { Button, Card, Col, Layout, Row, Statistic } from "antd";

// Import icons from Ant Design
import { PlusOutlined } from '@ant-design/icons';

// Extract the Content layout component from Ant Design’s Layout
const { Content } = Layout;

// DashBoardContent component — displays user information and quick actions
const DashBoardContent = ({ userProfile, quickActions, navigate }) => {
  return (
    // Main content area with padding and muted background
    <Content className="p-6 bg-muted">
      <div className="max-w-7xl mx-auto"> {/* Centers and limits the content width */}

        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {/* Personalized greeting using the user's display name */}
            Welcome, {userProfile?.displayName}!
          </h1>

          {/* Display role-specific subtitle */}
          <p className="text-lg text-muted-foreground">
            {userProfile?.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
          </p>
        </div>

        {/* Statistics section showing role, status, and join date */}
        <Row gutter={[24, 24]} className="mb-8"> {/* Adds responsive spacing between cards */}
          
          {/* User Role Statistic */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Your Role"
                value={userProfile?.role}
                valueStyle={{ color: '#1890ff', textTransform: 'capitalize' }}
              />
            </Card>
          </Col>

          {/* Account Status Statistic */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Account Status"
                value="Active"
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>

          {/* Member Since Statistic */}
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Member Since"
                value={new Date(userProfile?.createdAt || Date.now()).toLocaleDateString()} // Formats date to readable string
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Actions Section */}
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>

        <Row gutter={[24, 24]}>
          {/* Loop through quick actions array and render each as a card */}
          {quickActions.map((action, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable                       // Adds hover effect
                className="h-full"              // Ensures card height consistency
                onClick={() => navigate(action.path)} // Navigates to respective path
              >
                <div className="text-center">
                  {/* Icon for the action */}
                  <div className="mb-4">{action.icon}</div>

                  {/* Action title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {action.title}
                  </h3>

                  {/* Description for the action */}
                  <p className="text-muted-foreground mb-4">
                    {action.description}
                  </p>

                  {/* Action button */}
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
  );
};

// Export the component so it can be used in the Dashboard page
export default DashBoardContent;
