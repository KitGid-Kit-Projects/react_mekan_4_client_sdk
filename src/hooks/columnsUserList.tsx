import { Button, Popconfirm, Space } from "antd";
import { 
  EditOutlined, 
  DeleteOutlined, 
} from '@ant-design/icons';
// Import Day.js for date formatting
import dayjs from 'dayjs';
const columnsUserList=({navigate,handleDelete})=>{
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

  return columns
}

export default columnsUserList