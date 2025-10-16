import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import useForgot from '@/hooks/useForgot';

const ForgotPassword = () => {
const {loading, setLoading,emailSent, setEmailSent,onFinish}=useForgot()

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
          <p className="text-muted-foreground">
            {emailSent 
              ? 'Check your email for reset instructions'
              : 'Enter your email to reset your password'
            }
          </p>
        </div>

        {!emailSent ? (
          <Form
            name="forgot-password"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Email" 
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading} 
                block
                size="large"
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="text-center py-4">
            <Button 
              type="primary" 
              onClick={() => setEmailSent(false)}
              size="large"
            >
              Send Again
            </Button>
          </div>
        )}

        <div className="text-center mt-6">
          <Link to="/login" className="text-primary hover:text-accent inline-flex items-center gap-2">
            <ArrowLeftOutlined />
            Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
