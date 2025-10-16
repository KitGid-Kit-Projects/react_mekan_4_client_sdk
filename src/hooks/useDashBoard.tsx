import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  UserAddOutlined, 
  TeamOutlined, 
  UserOutlined
} from '@ant-design/icons';
const useDashBoard=()=>{

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
  return{userProfile,navigate,quickActions}
}

export default useDashBoard