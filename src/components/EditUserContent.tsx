import { Layout, Card, Form, Input, Button, message, Spin, InputNumber } from 'antd';
// Import icons from Ant Design
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Extract Content component from Layout for convenience
const { Content } = Layout;

const EditUserContent=({navigate,form,onFinish,loading})=>{
return(
          <Content className="p-6 bg-muted">
        {/* Center content with limited width */}
        <div className="max-w-2xl mx-auto">
          {/* Back button to return to users list */}
          <Button 
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          {/* Main card container for form */}
          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Edit User Data
            </h1>

            {/* Ant Design form for editing user info */}
            <Form
              form={form} // Link with form instance
              layout="vertical" // Vertical form layout
              onFinish={onFinish} // Function to handle submission
              size="large" // Large input size
            >
              {/* Name field */}
              <Form.Item
                label="Name"
                name="displayName"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>

              {/* Age field */}
              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please enter age' }]}
              >
                <InputNumber 
                  placeholder="Enter age" 
                  min={1}
                  max={120}
                  className="w-full"
                />
              </Form.Item>

              {/* City field */}
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please enter city' }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>

              {/* Optional photo URL field */}
              <Form.Item
                label="Photo URL (Optional)"
                name="photoURL"
              >
                <Input placeholder="Enter photo URL" />
              </Form.Item>

              {/* Submit button */}
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading} // Show spinner while updating
                  icon={<SaveOutlined />} // Save icon
                  block // Full width button
                  size="large"
                >
                  Update User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
)
}

export default EditUserContent