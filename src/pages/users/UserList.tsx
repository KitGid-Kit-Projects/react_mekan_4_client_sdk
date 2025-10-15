// Import React hooks for managing component state and lifecycle
import { useState, useEffect } from 'react';
// Import navigation hook for page redirection
import { useNavigate } from 'react-router-dom';
// Import custom authentication context
import { useAuth } from '../../context/AuthContext';
// Import Firestore functions for querying, deleting, and listening to data
import { collection, query, where, onSnapshot, deleteDoc, doc, getDocs } from 'firebase/firestore';
// Import configured Firestore database
import { db } from '../../firebase';
// Import Ant Design UI components and utilities
import { Layout, Table, Button, Space, Popconfirm, message, Input, Card } from 'antd';
// Import commonly used icons for UI actions
import { 
  EditOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined
} from '@ant-design/icons';
// Import Navbar for consistent top navigation
import Navbar from '../../components/Navbar';
// Import Day.js for date formatting
import dayjs from 'dayjs';

// Destructure Layout and Input components for easier access
const { Content } = Layout;
const { Search } = Input;

// Define the main functional component
const UserList = () => {
  // Get user and their profile data from AuthContext
  const { user, userProfile } = useAuth();
  // Initialize navigation hook
  const navigate = useNavigate();
  // State for all user documents fetched from Firestore
  const [users, setUsers] = useState<any[]>([]);
  // State for users filtered by search input
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  // Loading state for data fetching
  const [loading, setLoading] = useState(true);
  // State for storing current search text
  const [searchText, setSearchText] = useState('');

  // useEffect hook runs when user or userProfile changes
  useEffect(() => {
    // Exit early if no authenticated user
    if (!user) return;

    // Determine if logged-in user is an admin
    const isAdmin = userProfile?.role === 'admin';

    // Query Firestore: admin sees all users; non-admin sees only their data
    const q = isAdmin 
      ? query(collection(db, 'usersData'))
      : query(collection(db, 'usersData'), where('uid', '==', user.uid));

    // Subscribe to live updates (real-time listener)
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // Map snapshot documents to a usable array
        const userData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Update both full and filtered data states
        setUsers(userData);
        setFilteredUsers(userData);
        setLoading(false);
      },
      (error) => {
        // Handle and display errors
        message.error('Failed to load users');
        setLoading(false);
      }
    );

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [user, userProfile]);

  // Function to filter user data by search text
  const handleSearch = (value: string) => {
    setSearchText(value);

    // Reset if search box is cleared
    if (!value) {
      setFilteredUsers(users);
      return;
    }

    // Filter by displayName, email, or city (case-insensitive)
    const filtered = users.filter(user => 
      user.displayName?.toLowerCase().includes(value.toLowerCase()) ||
      user.email?.toLowerCase().includes(value.toLowerCase()) ||
      user.city?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  // Function to delete a user document from Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'usersData', id));
      message.success('User deleted successfully!');
    } catch (error: any) {
      message.error('Failed to delete user');
    }
  };

  // Function to manually refresh user data from Firestore
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

  // Define columns for Ant Design Table
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
      // Display with capitalized first letter
      render: (role: string) => (
        <span style={{ textTransform: 'capitalize' }}>{role}</span>
      )
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      // Format date using dayjs
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
      // Render action buttons (Edit + Delete)
      render: (_: any, record: any) => (
        <Space>
          {/* Edit button navigates to edit page */}
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`/users/edit/${record.id}`)}
            size="small"
          >
            Edit
          </Button>

          {/* Delete confirmation pop-up */}
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

  // Main page layout and UI rendering
  return (
    <Layout className="min-h-screen">
      {/* Navigation bar */}
      <Navbar />

      <Content className="p-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <Card>
            {/* Header with title and action buttons */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-foreground">
                {userProfile?.role === 'admin' ? 'All Users' : 'My Data'}
              </h1>
              <Space>
                {/* Refresh data button */}
                <Button 
                  icon={<ReloadOutlined />}
                  onClick={handleRefresh}
                >
                  Refresh
                </Button>
                {/* Navigate to Add User page */}
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />}
                  onClick={() => navigate('/users/add')}
                >
                  Add User
                </Button>
              </Space>
            </div>

            {/* Search input for filtering table data */}
            <Search
              placeholder="Search by name, email, or city"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              className="mb-6"
            />

            {/* Data table showing user list */}
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

// Export the UserList component
export default UserList;
