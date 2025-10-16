import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Card, Divider } from 'antd';
import { GoogleOutlined, MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import useRegister from '@/hooks/useRegister';
import RegisterForm from '@/components/RegisterForm';

const Register = () => {

const {loading, setLoading,onFinish,handleGoogleLogin}=useRegister()
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Sign up to get started</p>
        </div>

   <RegisterForm onFinish={onFinish} loading={loading}/>

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
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="text-primary hover:text-accent font-medium">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;
