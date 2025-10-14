import { useNavigate } from 'react-router-dom';
import { Layout, Button, Space, Card, Row, Col } from 'antd';
import { 
  RocketOutlined, 
  SafetyOutlined, 
  ThunderboltOutlined,
  CloudOutlined 
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const Home = () => {

  const navigate = useNavigate();

  const features = [
    {
      icon: <SafetyOutlined className="text-5xl text-primary" />,
      title: 'Secure Authentication',
      description: 'Email/password and Google sign-in with Firebase Auth'
    },
    {
      icon: <CloudOutlined className="text-5xl text-primary" />,
      title: 'Cloud Firestore',
      description: 'Real-time database with automatic sync and offline support'
    },
    {
      icon: <ThunderboltOutlined className="text-5xl text-primary" />,
      title: 'Fast & Responsive',
      description: 'Built with React and Ant Design for optimal performance'
    },
    {
      icon: <RocketOutlined className="text-5xl text-primary" />,
      title: 'Modern Stack',
      description: 'Vite, TypeScript, and latest web technologies'
    }
  ];

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Welcome to Firebase App
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern React application with Firebase authentication, Firestore, and Storage
            </p>
            <Space size="large">
         
                <>
                  <Button 
                    type="primary" 
                    size="large"
                    onClick={() => navigate('/register')}
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="large"
                    onClick={() => navigate('/login')}
                  >
                    Sign In
                  </Button>
                </>

            </Space>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="mt-16 bg-primary text-white">
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg mb-6 opacity-90">
                Create your account and start managing your data today
              </p>
             
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
