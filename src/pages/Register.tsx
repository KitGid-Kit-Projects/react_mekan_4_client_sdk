
import {  Button, Card, Divider } from 'antd'; // Ant Design UI components
import { GoogleOutlined } from '@ant-design/icons'; // Icons for inputs and buttons
import useRegister from '@/hooks/useRegister';
import { Link } from 'react-router-dom';
import RegisterForm from '@/components/RegisterForm';

// Define the Register component
const Register = () => {
const {loading, setLoading,onFinish,handleGoogleLogin}=useRegister()

  // Component UI
  return (
    // Center the card both vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">
      {/* Card container for the form */}
      <Card className="w-full max-w-md shadow-lg">
        {/* Header text */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Sign up to get started</p>
        </div>


    <RegisterForm onFinish={onFinish} loading={loading} />
        {/* Divider between email/password registration and Google login */}
        <Divider>Or</Divider>

        {/* Google login button */}
        <Button
          icon={<GoogleOutlined />} // Google icon
          onClick={handleGoogleLogin} // Trigger Google login handler
          loading={loading}           // Show spinner while logging in
          block                       // Full width button
          size="large"                // Large button
        >
          Continue with Google
        </Button>

        {/* Footer: link to login page */}
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

// Export component to be used elsewhere
export default Register;