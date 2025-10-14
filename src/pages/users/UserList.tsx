import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { collection, query, where, onSnapshot, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Layout, Table, Button, Space, Popconfirm, message, Input, Card } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import Navbar from '../../components/Navbar';
import dayjs from 'dayjs';

const { Content } = Layout;
const { Search } = Input;

const UserList = () => {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!user) return;

    const isAdmin = userProfile?.role === 'admin';
    const q = isAdmin 
      ? query(collection(db, 'usersData'))
      : query(collection(db, 'usersData'), where('uid', '==', user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(userData);
      setFilteredUsers(userData);
      setLoading(false);
    }, (error) => {
      message.error('Failed to load users');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, userProfile]);

  const handleSearch = (value: string) => {
    setSearchText(value);
    if (!value) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter(user => 
      user.displayName?.toLowerCase().includes(value.toLowerCase()) ||
      user.email?.toLowerCase().includes(value.toLowerCase()) ||
      user.city?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'usersData', id));
      message.success('User deleted successfully!');
    } catch (error: any) {
      message.error('Failed to delete user');
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const isAdmin = userProfile?.role === 'admin';
      const q = isAdmin 
        ? query(collection(db, 'usersData'))
        : query(collection(db, 'usersData'), where('uid', '==', user?.uid));

      const snapshot = await getDocs(q);
      const userData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(userData);
      setFilteredUsers(userData);
      message.success('Users refreshed!');
    } catch (error) {
      message.error('Failed to refresh users');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'displayName',
      key: 'displayName',
      sorter: (a: any, b: any) => (a.displayName || '').localeCompare(b.displayName || '')
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: any, b: any) => (a.age || 0) - (b.age || 0)
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a: any, b: any) => (a.city || '').localeCompare(b.city || '')
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <span style={{ textTransform: 'capitalize' }}>{role}</span>
      )
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: any) => date ? dayjs(date.toDate()).format('MMM D, YYYY') : '-',
      sorter: (a: any, b: any) => {
        const dateA = a.createdAt ? a.createdAt.toDate() : new Date(0);
        const dateB = b.createdAt ? b.createdAt.toDate() : new Date(0);
        return dateA.getTime() - dateB.getTime();
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>

          <Popconfirm
            title="Delete user"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              danger 
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="p-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-foreground">
                {userProfile?.role === 'admin' ? 'All Users' : 'My Data'}
              </h1>
              <Space>
                <Button 
                  icon={<ReloadOutlined />}
                  onClick={handleRefresh}
                >
                  Refresh
                </Button>
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />}
                  onClick={() => navigate('/users/add')}
                >
                  Add User
                </Button>
              </Space>
            </div>

            <Search
              placeholder="Search by name, email, or city"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              className="mb-6"
            />

            <Table
              columns={columns}
              dataSource={filteredUsers}
              rowKey="id"
              loading={loading}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (total) => `Total ${total} users`
              }}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default UserList;
