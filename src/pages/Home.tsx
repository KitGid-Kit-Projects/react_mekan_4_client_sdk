import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
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
  const { user } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      icon: <SafetyOutlined style={{ fontSize: '48px', color: '#1677ff' }} />,
      title: 'Secure Authentication',
      description: 'Email/password and Google sign-in with Firebase Auth'
    },
    {
      icon: <CloudOutlined style={{ fontSize: '48px', color: '#1677ff' }} />,
      title: 'Cloud Firestore',
      description: 'Real-time database with automatic sync and offline support'
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: '48px', color: '#1677ff' }} />,
      title: 'Fast & Responsive',
      description: 'Built with React and Ant Design for optimal performance'
    },
    {
      icon: <RocketOutlined style={{ fontSize: '48px', color: '#1677ff' }} />,
      title: 'Modern Stack',
      description: 'Vite, TypeScript, and latest web technologies'
    }
  ];

  // Inline styles
  const styles = {
    layout: {
      minHeight: '100vh'
    },
    content: {
      backgroundColor: '#f0f2f5'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 24px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    title: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#262626',
      marginBottom: '16px',
      lineHeight: 1.2
    },
    subtitle: {
      fontSize: '20px',
      color: '#595959',
      marginBottom: '32px',
      lineHeight: 1.5
    },
    buttonGroup: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center'
    },
    primaryButton: {
      backgroundColor: '#1677ff',
      borderColor: '#1677ff',
      height: '48px',
      padding: '0 32px',
      fontSize: '16px'
    },
    secondaryButton: {
      height: '48px',
      padding: '0 32px',
      fontSize: '16px',
      borderColor: '#d9d9d9',
      color: '#262626'
    },
    featuresRow: {
      marginBottom: '64px'
    },
    featureCard: {
      height: '100%',
      textAlign: 'center',
      borderRadius: '12px',
      transition: 'all 0.3s',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer'
    },
    featureCardHover: {
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-4px)'
    },
    featureIcon: {
      marginBottom: '16px',
      fontSize: '48px',
      color: '#1677ff'
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#262626',
      marginBottom: '8px'
    },
    featureDescription: {
      color: '#595959',
      fontSize: '14px',
      lineHeight: 1.5
    },
    ctaCard: {
      backgroundColor: '#1677ff',
      color: 'white',
      marginTop: '64px',
      borderRadius: '12px',
      border: 'none'
    },
    ctaContent: {
      textAlign: 'center',
      padding: '32px'
    },
    ctaTitle: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '16px'
    },
    ctaDescription: {
      fontSize: '18px',
      marginBottom: '24px',
      opacity: 0.9,
      lineHeight: 1.5
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#1677ff',
      border: 'none',
      height: '48px',
      padding: '0 32px',
      fontSize: '16px',
      borderRadius: '8px'
    }
  };

  // Hover handler for feature cards
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = styles.featureCardHover.boxShadow;
    e.currentTarget.style.transform = styles.featureCardHover.transform;
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = styles.featureCard.boxShadow;
    e.currentTarget.style.transform = 'none';
  };

  return (
    <Layout style={styles.layout}>
      <Navbar />
      <Content style={styles.content}>
        <div style={styles.container}>
          {/* Header Section */}
          <div style={styles.header}>
            <h1 style={styles.title}>
              Welcome to Firebase App
            </h1>
            <p style={styles.subtitle}>
              A modern React application with Firebase authentication, Firestore, and Storage
            </p>
            <Space style={styles.buttonGroup}>
              {user ? (
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => navigate('/dashboard')}
                  style={styles.primaryButton}
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    type="primary" 
                    size="large"
                    onClick={() => navigate('/register')}
                    style={styles.primaryButton}
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="large"
                    onClick={() => navigate('/login')}
                    style={styles.secondaryButton}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Space>
          </div>

          {/* Features Grid */}
          <Row gutter={[32, 32]} style={styles.featuresRow}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  style={styles.featureCard}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <div style={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <h3 style={styles.featureTitle}>
                    {feature.title}
                  </h3>
                  <p style={styles.featureDescription}>
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* CTA Section */}
          <Card style={styles.ctaCard}>
            <div style={styles.ctaContent}>
              <h2 style={styles.ctaTitle}>Ready to get started?</h2>
              <p style={styles.ctaDescription}>
                Create your account and start managing your data today
              </p>
              {!user && (
                <Button 
                  size="large"
                  onClick={() => navigate('/register')}
                  style={styles.ctaButton}
                >
                  Sign Up Now
                </Button>
              )}
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;