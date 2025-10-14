import { Link, useNavigate } from 'react-router-dom';

import { Layout, Menu, Button, Avatar, Dropdown, Space } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  TeamOutlined, 
  LogoutOutlined,
  DashboardOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {

    navigate('/login');
  };

  const menuItems =  [
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

  return (
    <Header className="flex items-center justify-between px-6 bg-white shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold text-primary">
          Firebase App
        </Link>
        <Menu
          mode="horizontal"
          items={menuItems}
          className="flex-1 min-w-0 border-0"
        />
      </div>
      
      <div className="flex items-center gap-4">
       
          <Space>
            <Button type="link" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button type="primary" onClick={() => navigate('/register')}>
              Sign Up
            </Button>
          </Space>

      </div>
    </Header>
  );
};

export default Navbar;
