import { LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import {  Link } from 'react-router-dom';
const LoginForm=({
    onFinish,
    loading
})=>{

    return (

        <Form
          name="login"
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

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Password" 
            />
          </Form.Item>

          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-primary hover:text-accent">
              Forgot password?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary" 
              htmlType="submit" 
              loading={loading} 
              block
              size="large"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

    )
}
export default LoginForm