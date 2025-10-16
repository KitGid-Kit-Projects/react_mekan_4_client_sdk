
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
import Navbar from '../components/Navbar';

import useUserList from '@/hooks/useUserList';
import columnsUserList from '@/hooks/columnsUserList';

// Destructure Layout and Input components for easier access
const { Content } = Layout;
const { Search } = Input;

// Define the main functional component
const UserList = () => {
const {user, userProfile,users, setUsers,navigate,filteredUsers, setFilteredUsers,loading,setLoading,
        searchText, setSearchText,handleSearch,handleDelete,handleRefresh
     }=useUserList()


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
              columns={columnsUserList({navigate,handleDelete})}
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