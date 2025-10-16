// Importing useNavigate hook from React Router for page navigation
import { useNavigate } from "react-router-dom";

// Importing Ant Design icons used in the feature cards
import { 
  RocketOutlined,      // Represents speed or modern tech
  SafetyOutlined,      // Represents security or protection
  ThunderboltOutlined, // Represents performance and power
  CloudOutlined        // Represents cloud storage or database
} from '@ant-design/icons';

// Defining the custom hook: useHome
// This hook provides navigation functionality and a list of home page features
const useHome = () => {
  // useNavigate hook allows programmatic navigation between routes
  const navigate = useNavigate();

  // Array of feature objects displayed on the Home page
  // Each object includes an icon, title, and description
  const features = [
    {
      // Icon for the feature (Ant Design icon with styling)
      icon: <SafetyOutlined className="text-5xl text-primary" />,
      // Title of the feature
      title: 'Secure Authentication',
      // Short description of the feature
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

  // Returning both navigate (for routing) and features (for UI display)
  return { navigate, features };
};

// Exporting the custom hook for use in other components (like HomeContent)
export default useHome;