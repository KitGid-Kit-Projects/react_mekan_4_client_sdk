// Import necessary UI components from Ant Design
import { Layout, Card, Form, Input, Button, Upload, Avatar, message, Spin } from 'antd';
// Import commonly used icons from Ant Design
import { UserOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';

// Extract Content component from Layout for easier usage
const { Content } = Layout;

// Define the ProfileContent functional component
// Receives all profile-related props such as data, file handling, form, and loading state
const ProfileContent = ({ profileData, fileList, handleUpload, uploading, form, onFinish, user, loading }) => {
  return (
    <Content className="p-6 bg-muted">
      {/* Container for centering and limiting the content width */}
      <div className="max-w-2xl mx-auto">
        {/* Page title */}
        <h1 className="text-3xl font-bold text-foreground mb-6">My Profile</h1>

        {/* Card container for user profile details */}
        <Card className="mb-6">
          {/* Avatar section for displaying and uploading profile image */}
          <div className="flex flex-col items-center mb-6">
            <Avatar 
              size={120} // Avatar size in pixels
              icon={<UserOutlined />} // Default icon if no image
              src={profileData?.photoURL} // User's uploaded photo
              className="mb-4" // Margin for spacing below avatar
            />
            {/* Upload button for profile photo */}
            <Upload
              beforeUpload={handleUpload} // Custom function to handle upload
              showUploadList={false} // Hide default upload file list
              fileList={fileList} // Current file list (if any)
            >
              <Button 
                icon={<UploadOutlined />} // Upload icon
                loading={uploading}       // Loading spinner while uploading
              >
                Upload Photo
              </Button>
            </Upload>
          </div>

          {/* Form section for editing profile information */}
          <Form
            form={form}           // Ant Design form instance
            layout="vertical"     // Vertical label alignment
            onFinish={onFinish}   // Function to handle form submission
            size="large"          // Larger form elements for better UX
          >
            {/* Display name input field */}
            <Form.Item
              label="Display Name"
              name="displayName"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            {/* Age input field */}
            <Form.Item
              label="Age"
              name="age"
            >
              <Input type="number" placeholder="Enter your age" />
            </Form.Item>

            {/* City input field */}
            <Form.Item
              label="City"
              name="city"
            >
              <Input placeholder="Enter your city" />
            </Form.Item>

            {/* Email field (read-only, fetched from authentication) */}
            <Form.Item label="Email">
              <Input value={user?.email || ''} disabled />
            </Form.Item>

            {/* Role field (read-only, shows current user role) */}
            <Form.Item label="Role">
              <Input 
                value={profileData?.role || 'user'} 
                disabled 
                style={{ textTransform: 'capitalize' }} // Capitalize role text
              />
            </Form.Item>

            {/* Submit button for saving changes */}
            <Form.Item>
              <Button 
                type="primary"             // Primary styled button
                htmlType="submit"          // Submit form on click
                loading={loading}          // Show spinner during saving
                icon={<SaveOutlined />}    // Save icon
                block                      // Full width
                size="large"               // Larger button
              >
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Content>
  );
};

// Export the component for use in profile page
export default ProfileContent;