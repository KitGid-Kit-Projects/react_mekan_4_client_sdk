import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Layout, Card, Form, Input, Button, Upload, Avatar, message, Spin } from 'antd';
import { UserOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const Profile = () => {
  const { user } = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    loadProfile();
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const docRef = doc(db, 'usersData', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData(data);
        form.setFieldsValue({
          displayName: data.displayName,
          age: data.age,
          city: data.city
        });
      }
    } catch (error: any) {
      message.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file: any) => {
    if (!user) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `users/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const docRef = doc(db, 'usersData', user.uid);
      await updateDoc(docRef, { photoURL: downloadURL });

      setProfileData({ ...profileData, photoURL: downloadURL });
      message.success('Photo uploaded successfully!');
    } catch (error: any) {
      message.error('Failed to upload photo');
    } finally {
      setUploading(false);
    }

    return false;
  };

  const onFinish = async (values: any) => {
    if (!user) return;

    setLoading(true);
    try {
      const docRef = doc(db, 'usersData', user.uid);
      await updateDoc(docRef, {
        displayName: values.displayName,
        age: values.age,
        city: values.city
      });

      message.success('Profile updated successfully!');
      loadProfile();
    } catch (error: any) {
      message.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profileData) {
    return (
      <Layout className="min-h-screen">
        <Navbar />
        <Content className="flex items-center justify-center">
          <Spin size="large" />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen">
      <Navbar />
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
    </Layout>
  );
};

export default Profile;
