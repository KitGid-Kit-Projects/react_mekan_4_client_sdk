import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import useDashBoard from '@/hooks/useDashBoard';
import DashBoardContent from '@/components/DashBoardContent';

const Dashboard = () => {
const {userProfile,navigate,quickActions}=useDashBoard()

  return (
    <Layout className="min-h-screen">
      <Navbar />
    <DashBoardContent userProfile={userProfile} quickActions={quickActions} navigate={navigate}/>
    </Layout>
  );
};

export default Dashboard;