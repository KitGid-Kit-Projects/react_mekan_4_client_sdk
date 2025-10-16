
import { Link } from 'react-router-dom'; // For navigation links

import {  Card } from 'antd'; // Ant Design components for UI
import {  ArrowLeftOutlined } from '@ant-design/icons'; // Icons for form inputs and navigation
import useForgotPassword from '@/hooks/useForgotPassword';
import ForgetPassWordEmail from '@/components/ForgetPassWordEmail';


// Define the ForgotPassword component
const ForgotPassword = () => {
const {loading, setLoading,emailSent, setEmailSent,onFinish}=useForgotPassword()

  // JSX returned by the component
  return (
    // Main wrapper: centers card vertically and horizontally
    <div className="flex items-center justify-center min-h-screen bg-muted">
      {/* Card container for the form and messages */}
      <Card className="w-full max-w-md shadow-lg">
        {/* Header section with title and instructions */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
          <p className="text-muted-foreground">
            {/* Conditional message: depends on whether email has been sent */}
            {emailSent 
              ? 'Check your email for reset instructions' // Message after sending email
              : 'Enter your email to reset your password'  // Default message before sending
            }
          </p>
        </div>

          <ForgetPassWordEmail emailSent={emailSent} onFinish={onFinish} loading={loading} setEmailSent={setEmailSent}/>

        {/* Footer section with link back to login */}
        <div className="text-center mt-6">
          <Link 
            to="/login" // Navigate to login page
            className="text-primary hover:text-accent inline-flex items-center gap-2"
          >
            <ArrowLeftOutlined /> {/* Left arrow icon */}
            Back to Login          {/* Text for navigation */}
          </Link>
        </div>
      </Card>
    </div>
  );
};

// Export component so it can be used elsewhere
export default ForgotPassword;