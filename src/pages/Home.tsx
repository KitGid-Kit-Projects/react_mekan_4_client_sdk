import { Layout, Button, Space, Card, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import useHome from '@/hooks/useHome';
import HomeContent from '@/components/HomeContent';


const Home = () => {

const {navigate,features }=useHome()
  return (
    <Layout className="min-h-screen">
      <Navbar />
    <HomeContent navigate={navigate} features={features}/>
    </Layout>
  );
};

export default Home;
