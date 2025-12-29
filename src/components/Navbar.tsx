import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Avatar, Dropdown, Space } from 'antd';
import { 
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/login');
  };

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>
    }
  ];

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link to="/profile">Profile</Link>
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout
    }
  ];

  // Inline styles for the navbar
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
      height: '64px',
      lineHeight: '64px'
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1677ff',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    },
    menu: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      lineHeight: '62px'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    loginButton: {
      color: '#595959'
    },
    signupButton: {
      backgroundColor: '#1677ff',
      borderColor: '#1677ff'
    }
  };

  return (
    <Header style={styles.header}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.logo}>
          Firebase App
        </Link>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={styles.menu}
        />
      </div>
      
      <div style={styles.rightSection}>
        <Space>
          <Button 
            type="link" 
            onClick={() => navigate('/login')}
            style={styles.loginButton}
          >
            Login
          </Button>
          <Button 
            type="primary" 
            onClick={() => navigate('/register')}
            style={styles.signupButton}
          >
            Sign Up
          </Button>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;