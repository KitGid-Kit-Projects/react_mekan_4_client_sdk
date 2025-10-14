import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Layout, Card, Row, Col, Button, Statistic } from 'antd';
import { 
  UserAddOutlined, 
  TeamOutlined, 
  UserOutlined,
  PlusOutlined 
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const Dashboard = () => {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Add User',
      description: 'Create a new user profile',
      icon: <UserAddOutlined className="text-4xl text-primary" />,
      path: '/users/add',
      color: '#1890ff'
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

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="p-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome, {userProfile?.displayName}!
            </h1>
            <p className="text-lg text-muted-foreground">
              {userProfile?.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
            </p>
          </div>

          <Row gutter={[24, 24]} className="mb-8">
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Your Role" 
                  value={userProfile?.role} 
                  valueStyle={{ color: '#1890ff', textTransform: 'capitalize' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Account Status" 
                  value="Active"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Member Since" 
                  value={new Date(userProfile?.createdAt || Date.now()).toLocaleDateString()}
                />
              </Card>
            </Col>
          </Row>

          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
          <Row gutter={[24, 24]}>
            {quickActions.map((action, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card 
                  hoverable
                  className="h-full"
                  onClick={() => navigate(action.path)}
                >
                  <div className="text-center">
                    <div className="mb-4">{action.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {action.description}
                    </p>
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

export default Dashboard;
