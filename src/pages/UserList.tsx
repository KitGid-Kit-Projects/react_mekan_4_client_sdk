// Import core UI components and layout elements from Ant Design
import { Layout, Table, Button, Space, Popconfirm, message, Input, Card } from 'antd';
// Import commonly used icons for UI actions (edit, delete, add, search, refresh)
import { 
  EditOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined
} from '@ant-design/icons';
// Import Navbar for consistent top navigation across all pages
import Navbar from '../components/Navbar';

// Import custom hook that manages user list logic (fetching, filtering, deleting, refreshing)
import useUserList from '@/hooks/useUserList';
// Import predefined column structure for the user table
import columnsUserList from '@/hooks/columnsUserList';

// Destructure Layout and Input for cleaner code
const { Content } = Layout;
const { Search } = Input;

// Define the UserList functional component
const UserList = () => {
  // Destructure values and functions from the useUserList custom hook
  const {
    user,                 // Current logged-in user
    userProfile,          // User profile details (includes role)
    users,                // Original list of all users
    setUsers,             // Setter for updating user list
    navigate,             // Navigation function for routing
    filteredUsers,        // Filtered list after search
    setFilteredUsers,     // Setter for updating filtered users
    loading,              // Loading state for data fetching
    setLoading,           // Setter for loading state
    searchText,           // Current search text
    setSearchText,        // Setter for search text
    handleSearch,         // Function for handling search/filter
    handleDelete,         // Function for deleting a user
    handleRefresh         // Function for reloading data
  } = useUserList();

  // JSX structure that defines the page layout and UI components
  return (
    <Layout className="min-h-screen">
      {/* Top navigation bar */}
      <Navbar />

      {/* Main content section with background and padding */}
      <Content className="p-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <Card>
            {/* Page header section with title and action buttons */}
            <div className="flex justify-between items-center mb-6">
              {/* Dynamic title based on user role */}
              <h1 className="text-3xl font-bold text-foreground">
                {userProfile?.role === 'admin' ? 'All Users' : 'My Data'}
              </h1>
              <Space>
                {/* Button to refresh user data */}
                <Button 
                  icon={<ReloadOutlined />}
                  onClick={handleRefresh}
                >
                  Refresh
                </Button>

                {/* Button to navigate to Add User page */}
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />}
                  onClick={() => navigate('/users/add')}
                >
                  Add User
                </Button>
              </Space>
            </div>

            {/* Search bar for filtering users by name, email, or city */}
            <Search
              placeholder="Search by name, email, or city"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              className="mb-6"
            />

            {/* Ant Design table displaying user data */}
            <Table
              columns={columnsUserList({ navigate, handleDelete })} // Column structure with actions
              dataSource={filteredUsers}                            // Filtered list to be displayed
              rowKey="id"                                           // Unique key for each row
              loading={loading}                                     // Show spinner while loading
              pagination={{
                pageSize: 10,                                       // Default items per page
                showSizeChanger: true,                              // Allow changing page size
                showTotal: (total) => `Total ${total} users`        // Show total count in footer
              }}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

// Export the UserList component for use in routing or imports
export default UserList;