// Import UI components and utilities from Ant Design
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
// Import icons for button visuals
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// Destructure Layout for convenience
const { Content } = Layout;
const AddUserContent=({navigate,form,onFinish,loading})=>{

    return (
          <Content className="p-6 bg-muted">
        <div className="max-w-2xl mx-auto">
          {/* Back button for navigation */}
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          {/* Card container for form */}
          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Add User Data
            </h1>

            {/* Ant Design form for user input */}
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
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
                  loading={loading}
                  icon={<SaveOutlined />}
                  block
                  size="large"
                >
                  Save User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    )
}

export default   AddUserContent