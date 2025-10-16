// Importing Link for navigation, Ant Design components, and icons
import { Link } from 'react-router-dom';
import { Button, Card, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

// Importing custom hook that handles login logic
import useLogin from '@/hooks/useLogin';

// Importing the LoginForm component
import LoginForm from '@/components/LoginForm';

// Defining the Login page component
const Login = () => {
  // Destructuring states and functions from useLogin hook
  // - loading: indicates if login request is in progress
  // - onFinish: function to handle form submission
  // - handleGoogleLogin: function to handle Google OAuth login
  const { loading, onFinish, handleGoogleLogin } = useLogin();

  return (
    // Full-screen container centered vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">

      {/* Card container for the login form and buttons */}
      <Card className="w-full max-w-md shadow-lg">

        {/* Header section with title and description */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* LoginForm component handles email/password login */}
        <LoginForm onFinish={onFinish} loading={loading} />

        {/* Divider between email/password login and Google login */}
        <Divider>Or</Divider>

        {/* Google OAuth login button */}
        <Button 
          icon={<GoogleOutlined />}    // Google icon
          onClick={handleGoogleLogin}  // Calls Google login function
          loading={loading}            // Shows loading spinner while processing
          block                        // Full-width button
          size="large"                 // Large button size
        >
          Continue with Google
        </Button>

        {/* Footer section with link to registration page */}
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

// Exporting Login component for use in routes
export default Login;