// Importing necessary components from Ant Design
import { Button, Card, Col, Layout, Row, Space } from "antd";

// Destructuring the Content component from Layout
const { Content } = Layout;

// Defining the HomeContent functional component
// It takes two props: navigate (for navigation) and features (an array of feature objects)
const HomeContent = ({ navigate, features }: any) => {
  return (
    // Ant Design Layout Content section with a background color class
    <Content className="bg-muted">
      {/* Main container with max width, centered horizontally, and padding */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Header section with title, subtitle, and buttons */}
        <div className="text-center mb-16">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Welcome to Firebase App
          </h1>

          {/* Subheading/description text */}
          <p className="text-xl text-muted-foreground mb-8">
            A modern React application with Firebase authentication, Firestore, and Storage
          </p>

          {/* Space component for spacing between buttons */}
          <Space size="large">
            <>
              {/* "Get Started" button navigates to the register page */}
              <Button 
                type="primary" 
                size="large"
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>

              {/* "Sign In" button navigates to the login page */}
              <Button 
                size="large"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            </>
          </Space>
        </div>

        {/* Features grid section */}
        <Row gutter={[32, 32]}>
          {/* Mapping through the features array and displaying each feature in a column */}
          {features.map((feature: any, index: number) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              {/* Card for each feature with hover shadow animation */}
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                {/* Feature icon */}
                <div className="mb-4">{feature.icon}</div>

                {/* Feature title */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call-to-action card at the bottom */}
        <Card className="mt-16 bg-primary text-white">
          <div className="text-center py-8">
            {/* CTA title */}
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>

            {/* CTA description */}
            <p className="text-lg mb-6 opacity-90">
              Create your account and start managing your data today
            </p>
          </div>
        </Card>
      </div>
    </Content>
  );
};

// Exporting the HomeContent component as default
export default HomeContent;