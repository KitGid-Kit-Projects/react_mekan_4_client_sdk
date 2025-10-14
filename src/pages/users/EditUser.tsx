import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Layout, Card, Form, Input, Button, message, Spin, InputNumber } from 'antd';
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Navbar from '../../components/Navbar';

const { Content } = Layout;

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    if (!id) return;

    try {
      const docRef = doc(db, 'usersData', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        form.setFieldsValue({
          displayName: data.displayName,
          age: data.age,
          city: data.city,
          photoURL: data.photoURL
        });
      } else {
        message.error('User not found');
        navigate('/users');
      }
    } catch (error: any) {
      message.error('Failed to load user data');
    } finally {
      setFetching(false);
    }
  };

  const onFinish = async (values: any) => {
    if (!id) return;

    setLoading(true);
    try {
      const docRef = doc(db, 'usersData', id);
      await updateDoc(docRef, {
        displayName: values.displayName,
        age: values.age,
        city: values.city,
        photoURL: values.photoURL || ''
      });

      message.success('User data updated successfully!');
      navigate('/users');
    } catch (error: any) {
      message.error('Failed to update user data');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
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
          <Button 
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/users')}
            className="mb-6"
          >
            Back to Users
          </Button>

          <Card>
            <h1 className="text-3xl font-bold text-foreground mb-6">Edit User Data</h1>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
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

              <Form.Item
                label="Photo URL (Optional)"
                name="photoURL"
              >
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
                  Update User Data
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default EditUser;
