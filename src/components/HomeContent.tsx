// Importing Ant Design components for UI and layout
import { Button, Card, Col, Layout, Row, Space } from "antd"

// Destructuring Content component from Layout
const { Content } = Layout;

// Defining HomeContent functional component, accepts user, navigate, and features as props
const HomeContent=({user,navigate,features}:any)=>{

    return (
        // Layout Content wrapper with background color
        <Content className="bg-muted">
            {/* Main container with max width, centered, and padding */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Header section */}
                <div className="text-center mb-16">
                    {/* Main heading */}
                    <h1 className="text-5xl font-bold text-foreground mb-4">
                        Welcome to Firebase App
                    </h1>
                    {/* Subheading/description */}
                    <p className="text-xl text-muted-foreground mb-8">
                        A modern React application with Firebase authentication, Firestore, and Storage
                    </p>
                    {/* Space between buttons */}
                    <Space size="large">
                        {/* Conditional buttons based on user login state */}
                        {user ? (
                            // Button for logged-in user to go to dashboard
                            <Button
                                type="primary" 
                                size="large"
                                onClick={() => navigate('/dashboard')}
                            >
                                Go to Dashboard
                            </Button>
                        ) : (
                            <>
                                {/* Button to register */}
                                <Button 
                                    type="primary" 
                                    size="large"
                                    onClick={() => navigate('/register')}
                                >
                                    Get Started
                                </Button>
                                {/* Button to login */}
                                <Button 
                                    size="large"
                                    onClick={() => navigate('/login')}
                                >
                                    Sign In
                                </Button>
                            </>
                        )}
                    </Space>
                </div>

                {/* Features grid section */}
                <Row gutter={[32, 32]}>
                    {features.map((feature: any, index: number) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            {/* Individual feature card */}
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

                {/* Call-to-action card at bottom */}
                <Card className="mt-16 bg-primary text-white">
                    <div className="text-center py-8">
                        {/* CTA heading */}
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        {/* CTA description */}
                        <p className="text-lg mb-6 opacity-90">
                            Create your account and start managing your data today
                        </p>
                        {/* Show signup button only if user is not logged in */}
                        {!user && (
                            <Button 
                                size="large"
                                onClick={() => navigate('/register')}
                            >
                                Sign Up Now
                            </Button>
                        )}
                    </div>
                </Card>
            </div>
        </Content>
    )
}

// Exporting HomeContent component
export default HomeContent;
