// Import custom authentication hook
import { useAuth } from "@/context/AuthContext";

// Import useNavigate hook from React Router for navigation
import { useNavigate } from "react-router-dom";

// Import Ant Design icons for feature display
import {
  RocketOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  CloudOutlined
} from '@ant-design/icons';

// Define custom hook for Home page
const useHome = () => {
  // Get current user from authentication context
  const { user } = useAuth();

  // Get navigate function for programmatic routing
  const navigate = useNavigate();

  // Array of features to display on Home page
  const features = [
    {
      // Icon for feature
      icon: <SafetyOutlined className="text-5xl text-primary" />,
      // Feature title
      title: 'Secure Authentication',
      // Feature description
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

  // Return user, navigate function, and features array
  return { user, navigate, features }
}

// Export custom hook for use in other components
export default useHome;
