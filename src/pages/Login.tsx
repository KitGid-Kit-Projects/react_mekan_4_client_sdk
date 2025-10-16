import {  Link } from 'react-router-dom';
import { Button, Card, Divider } from 'antd';
import { GoogleOutlined} from '@ant-design/icons';
import useLogin from '@/hooks/useLogin';
import LoginForm from '@/components/LoginForm';

const Login = () => {
const {loading,onFinish,handleGoogleLogin }=useLogin()
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>
    <LoginForm onFinish={onFinish} loading={loading}/>
        <Divider>Or</Divider>

        <Button 
          icon={<GoogleOutlined />}
          onClick={handleGoogleLogin}
          loading={loading}
          block
          size="large"
        >
          Continue with Google
        </Button>

        <div className="text-center mt-6">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/register" className="text-primary hover:text-accent font-medium">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
