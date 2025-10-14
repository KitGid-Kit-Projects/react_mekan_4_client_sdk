import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Layout, Card, Form, Input, Button, message, InputNumber } from 'antd';
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Navbar from '../../components/Navbar';

const { Content } = Layout;

const AddUser = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    if (!user) return;

    setLoading(true);
    try {
      // Use setDoc instead of addDoc, so document ID = user's UID
      await setDoc(doc(db, 'usersData', user.uid), {
        uid: user.uid,
        displayName: values.displayName,
        age: values.age,
        city: values.city,
        photoURL: values.photoURL || '',
        createdAt: new Date(),
      });

      message.success('User data added successfully!');
      navigate('/users');
    } catch (error: any) {
      console.error(error);
      message.error('Failed to add user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="p-6 bg-muted">
        <div className="max-w-2xl mx-auto">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">Add User Data</h1>

            <Form form={form} layout="vertical" onFinish={onFinish} size="large">
              <Form.Item
                label="Name"
                name="displayName"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>

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

              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please enter city' }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>

              <Form.Item label="Photo URL (Optional)" name="photoURL">
                <Input placeholder="Enter photo URL" />
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
                  Save User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default AddUser;
