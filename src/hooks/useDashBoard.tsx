// Import custom authentication context hook to access the logged-in user's profile
import { useAuth } from "@/context/AuthContext";

// Import navigation hook from React Router for programmatic navigation
import { useNavigate } from "react-router-dom";

// Import Ant Design icons for use in the dashboard quick actions
import { 
  UserAddOutlined, 
  TeamOutlined, 
  UserOutlined
} from '@ant-design/icons';

// Custom hook: useDashBoard
// Provides user data, navigation, and predefined quick action configurations for the dashboard
const useDashBoard = () => {

  // Get the currently logged-in user's profile information from the AuthContext
  const { userProfile } = useAuth();

  // Initialize navigation function from React Router
  const navigate = useNavigate();

  // Define an array of quick actions to display on the dashboard
  // Each action includes title, description, icon, route path, and optional color
  const quickActions = [
    {
      title: 'Add User', // Action title
      description: 'Create a new user profile', // Short explanation of the action
      icon: <UserAddOutlined className="text-4xl text-primary" />, // Icon displayed for this action
      path: '/users/add', // Navigation path when clicked
      color: '#1890ff' // Optional color styling
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

  // Return the user profile, navigate function, and quick actions
  return { userProfile, navigate, quickActions };
};

// Export the custom hook for use in the Dashboard component
export default useDashBoard;
