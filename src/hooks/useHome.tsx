import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  RocketOutlined, 
  SafetyOutlined, 
  ThunderboltOutlined,
  CloudOutlined 
} from '@ant-design/icons';
const useHome=()=>{
 const { user } = useAuth();
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
  return {user,navigate,features }
}

export default useHome