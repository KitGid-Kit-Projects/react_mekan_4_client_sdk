import { Layout, Card, Form, Input, Button, Upload, Avatar, message, Spin } from 'antd';
import { UserOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
const { Content } = Layout;

const ProfileContent=({profileData,fileList,handleUpload,uploading,form,onFinish,user,loading})=>{
return (
          <Content className="p-6 bg-muted">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-6">My Profile</h1>

          <Card className="mb-6">
            <div className="flex flex-col items-center mb-6">
              <Avatar 
                size={120} 
                icon={<UserOutlined />}
                src={profileData?.photoURL}
                className="mb-4"
              />
              <Upload
                beforeUpload={handleUpload}
                showUploadList={false}
                fileList={fileList}
              >
                <Button 
                  icon={<UploadOutlined />} 
                  loading={uploading}
                >
                  Upload Photo
                </Button>
              </Upload>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Form.Item
                label="Display Name"
                name="displayName"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
              >
                <Input type="number" placeholder="Enter your age" />
              </Form.Item>

              <Form.Item
                label="City"
                name="city"
              >
                <Input placeholder="Enter your city" />
              </Form.Item>

              <Form.Item
                label="Email"
              >
                <Input value={user?.email || ''} disabled />
              </Form.Item>

              <Form.Item
                label="Role"
              >
                <Input 
                  value={profileData?.role || 'user'} 
                  disabled 
                  style={{ textTransform: 'capitalize' }}
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<SaveOutlined />}
                  block
                  size="large"
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
)
}

export  default ProfileContent