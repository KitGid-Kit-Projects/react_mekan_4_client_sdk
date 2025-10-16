// Importing necessary React Router components for navigation and linking
import { Link, useNavigate } from 'react-router-dom';

// Importing UI components from Ant Design
import { Layout, Menu, Button, Avatar, Dropdown, Space } from 'antd';

// Importing Ant Design icons used in the navbar
import { 
  HomeOutlined,    // Home icon
  UserOutlined,    // User profile icon
  LogoutOutlined,  // Logout icon
} from '@ant-design/icons';

// Destructuring Header from Ant Design Layout component
const { Header } = Layout;

// Defining the Navbar functional component
const Navbar = () => {
  // Hook from React Router used for programmatic navigation
  const navigate = useNavigate();

  // Function to handle logout logic
  // (In a real app, you'd clear user session or Firebase auth here)
  const handleLogout = async () => {
    // Redirecting the user to the login page after logout
    navigate('/login');
  };

  // Defining the main menu items (left side of the navbar)
  const menuItems = [
    {
      key: 'home',                 // Unique key for the menu item
      icon: <HomeOutlined />,      // Home icon
      label: <Link to="/">Home</Link> // Clicking navigates to the home page
    }
  ];

  // Defining user dropdown menu items (if logged in)
  const userMenuItems = [
    {
      key: 'profile',              // Unique key for profile menu item
      icon: <UserOutlined />,      // Profile icon
      label: <Link to="/profile">Profile</Link> // Navigates to profile page
    },
    {
      key: 'logout',               // Unique key for logout item
      icon: <LogoutOutlined />,    // Logout icon
      label: 'Logout',             // Label text
      onClick: handleLogout        // Calls logout function when clicked
    }
  ];

  // Rendering the Navbar UI
  return (
    // Header section of the layout with flexbox styling and background color
    <Header className="flex items-center justify-between px-6 bg-white shadow-sm">
      
      {/* Left side: Logo and navigation menu */}
      <div className="flex items-center gap-8">
        {/* App title/logo, navigates to home page */}
        <Link to="/" className="text-xl font-bold text-primary">
          Firebase App
        </Link>

        {/* Horizontal menu showing navigation links */}
        <Menu
          mode="horizontal"             // Menu displayed horizontally
          items={menuItems}             // Menu items array defined above
          className="flex-1 min-w-0 border-0" // Styling for layout
        />
      </div>
      
      {/* Right side: Authentication buttons (Login / Sign Up) */}
      <div className="flex items-center gap-4">
        <Space>
          {/* Login button navigates to /login page */}
          <Button type="link" onClick={() => navigate('/login')}>
            Login
          </Button>

          {/* Sign Up button navigates to /register page */}
          <Button type="primary" onClick={() => navigate('/register')}>
            Sign Up
          </Button>
        </Space>
      </div>
    </Header>
  );
};

// Exporting Navbar component as the default export
export default Navbar;