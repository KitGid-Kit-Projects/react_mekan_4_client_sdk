import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { Layout, Card, Form, Input, Button, Table, Modal, Select, Space, Tag, message, Popconfirm } from "antd";
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SearchOutlined,
  EyeOutlined 
} from '@ant-design/icons';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';


const { Content } = Layout;
const { Option } = Select;

interface Building {
  id: string;
  name: string;
  address: string;
  type: 'residential' | 'commercial' | 'industrial' | 'mixed';
  floors: number;
  yearBuilt: number;
  status: 'active' | 'inactive' | 'under_construction';
  createdAt: Date;
}

const Buildings = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingBuilding, setEditingBuilding] = useState<Building | null>(null);
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [form] = Form.useForm();

  // Get current year
  const currentYear = new Date().getFullYear();

  // Load buildings from Firebase
  const loadBuildings = async () => {
    setLoading(true);
    try {
      const buildingsRef = collection(db, 'buildings');
      const snapshot = await getDocs(buildingsRef);
      
      const buildingsList: Building[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        buildingsList.push({
          id: doc.id,
          name: data.name || '',
          address: data.address || '',
          type: data.type || 'residential',
          floors: data.floors || 1,
          yearBuilt: data.yearBuilt || currentYear,
          status: data.status || 'active',
          createdAt: data.createdAt?.toDate() || new Date()
        });
      });
      
      setBuildings(buildingsList);
    } catch (error) {
      console.error('Error loading buildings:', error);
      message.error('Failed to load buildings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBuildings();
  }, []);

  // Handle form submission (Create/Update)
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const buildingData = {
        ...values,
        floors: parseInt(values.floors),
        yearBuilt: parseInt(values.yearBuilt),
        updatedAt: new Date()
      };

      if (editingBuilding) {
        // Update existing building
        const buildingRef = doc(db, 'buildings', editingBuilding.id);
        await updateDoc(buildingRef, buildingData);
        message.success('Building updated successfully');
      } else {
        // Create new building
        buildingData.createdAt = new Date();
        await addDoc(collection(db, 'buildings'), buildingData);
        message.success('Building created successfully');
      }

      setModalVisible(false);
      setEditingBuilding(null);
      form.resetFields();
      loadBuildings();
    } catch (error) {
      console.error('Error saving building:', error);
      message.error('Failed to save building');
    } finally {
      setLoading(false);
    }
  };

  // Handle building edit
  const handleEdit = (building: Building) => {
    setEditingBuilding(building);
    form.setFieldsValue({
      name: building.name,
      address: building.address,
      type: building.type,
      floors: building.floors,
      yearBuilt: building.yearBuilt,
      status: building.status
    });
    setModalVisible(true);
  };

  // Handle building delete
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'buildings', id));
      message.success('Building deleted successfully');
      loadBuildings();
    } catch (error) {
      console.error('Error deleting building:', error);
      message.error('Failed to delete building');
    }
  };

  // Filter buildings based on search and filters
  const filteredBuildings = buildings.filter(building => {
    const matchesSearch = searchText === '' || 
      building.name.toLowerCase().includes(searchText.toLowerCase()) ||
      building.address.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesType = filterType === 'all' || building.type === filterType;
    const matchesStatus = filterStatus === 'all' || building.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Building, b: Building) => a.name.localeCompare(b.name),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const typeColors: Record<string, string> = {
          residential: 'blue',
          commercial: 'green',
          industrial: 'orange',
          mixed: 'purple'
        };
        return (
          <Tag color={typeColors[type] || 'default'}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Tag>
        );
      },
      filters: [
        { text: 'Residential', value: 'residential' },
        { text: 'Commercial', value: 'commercial' },
        { text: 'Industrial', value: 'industrial' },
        { text: 'Mixed', value: 'mixed' },
      ],
      onFilter: (value: string, record: Building) => record.type === value,
    },
    {
      title: 'Floors',
      dataIndex: 'floors',
      key: 'floors',
      sorter: (a: Building, b: Building) => a.floors - b.floors,
    },
    {
      title: 'Year Built',
      dataIndex: 'yearBuilt',
      key: 'yearBuilt',
      sorter: (a: Building, b: Building) => a.yearBuilt - b.yearBuilt,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusColors: Record<string, string> = {
          active: 'success',
          inactive: 'default',
          under_construction: 'processing'
        };
        const statusText = status.replace('_', ' ');
        return (
          <Tag color={statusColors[status] || 'default'}>
            {statusText.charAt(0).toUpperCase() + statusText.slice(1)}
          </Tag>
        );
      },
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Under Construction', value: 'under_construction' },
      ],
      onFilter: (value: string, record: Building) => record.status === value,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Building) => (
        <Space>
          <Button 
            type="text" 
            icon={<EyeOutlined />}
            onClick={() => {
              Modal.info({
                title: 'Building Details',
                content: (
                  <div>
                    <p><strong>Name:</strong> {record.name}</p>
                    <p><strong>Address:</strong> {record.address}</p>
                    <p><strong>Type:</strong> {record.type}</p>
                    <p><strong>Floors:</strong> {record.floors}</p>
                    <p><strong>Year Built:</strong> {record.yearBuilt}</p>
                    <p><strong>Status:</strong> {record.status.replace('_', ' ')}</p>
                    <p><strong>Created At:</strong> {record.createdAt.toLocaleDateString()}</p>
                  </div>
                ),
              });
            }}
          />
          <Button 
            type="text" 
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Popconfirm
            title="Delete Building"
            description="Are you sure you want to delete this building?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              type="text" 
              danger 
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="p-6">
        <Card 
          title="Building Management"
          extra={
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={() => {
                setEditingBuilding(null);
                form.resetFields();
                setModalVisible(true);
              }}
            >
              Add Building
            </Button>
          }
        >
          {/* Search and Filters */}
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search by name or address..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-64"
            />
            <Select
              placeholder="Filter by type"
              value={filterType}
              onChange={setFilterType}
              className="w-40"
              allowClear
            >
              <Option value="all">All Types</Option>
              <Option value="residential">Residential</Option>
              <Option value="commercial">Commercial</Option>
              <Option value="industrial">Industrial</Option>
              <Option value="mixed">Mixed</Option>
            </Select>
            <Select
              placeholder="Filter by status"
              value={filterStatus}
              onChange={setFilterStatus}
              className="w-40"
              allowClear
            >
              <Option value="all">All Status</Option>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
              <Option value="under_construction">Under Construction</Option>
            </Select>
            <Button 
              onClick={() => {
                setSearchText('');
                setFilterType('all');
                setFilterStatus('all');
              }}
            >
              Clear Filters
            </Button>
          </div>

          {/* Buildings Table */}
          <Table
            columns={columns}
            dataSource={filteredBuildings}
            rowKey="id"
            loading={loading}
            pagination={{ pageSize: 10 }}
            scroll={{ x: 1000 }}
          />
        </Card>

        {/* Create/Edit Modal */}
        <Modal
          title={editingBuilding ? 'Edit Building' : 'Create New Building'}
          open={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            setEditingBuilding(null);
            form.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              type: 'residential',
              status: 'active',
              floors: 1,
              yearBuilt: currentYear
            }}
          >
            <Form.Item
              name="name"
              label="Building Name"
              rules={[
                { required: true, message: 'Please enter building name' },
                { min: 3, message: 'Name must be at least 3 characters' }
              ]}
            >
              <Input placeholder="Enter building name" />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                { required: true, message: 'Please enter address' },
                { min: 5, message: 'Address must be at least 5 characters' }
              ]}
            >
              <Input.TextArea 
                placeholder="Enter full address" 
                rows={3}
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="type"
                label="Building Type"
                rules={[{ required: true, message: 'Please select type' }]}
              >
                <Select placeholder="Select building type">
                  <Option value="residential">Residential</Option>
                  <Option value="commercial">Commercial</Option>
                  <Option value="industrial">Industrial</Option>
                  <Option value="mixed">Mixed Use</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select placeholder="Select status">
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                  <Option value="under_construction">Under Construction</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="floors"
                label="Number of Floors"
                rules={[
                  { required: true, message: 'Please enter number of floors' },
                  { type: 'number', min: 1, max: 200, message: 'Floors must be between 1 and 200' }
                ]}
              >
                <Input 
                  type="number" 
                  placeholder="Enter number of floors" 
                  min={1}
                  max={200}
                />
              </Form.Item>

              <Form.Item
                name="yearBuilt"
                label="Year Built"
                rules={[
                  { required: true, message: 'Please enter year built' },
                  { 
                    type: 'number', 
                    min: 1800, 
                    max: 2025, 
                    message: 'Year must be between 1800 and 2025' 
                  }
                ]}
              >
                <Input 
                  type="number" 
                  placeholder="Enter year built" 
                  min={1800}
                  max={2025}
                />
              </Form.Item>
            </div>

            <Form.Item className="mb-0">
              <div className="flex justify-end gap-2">
                <Button 
                  onClick={() => {
                    setModalVisible(false);
                    setEditingBuilding(null);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  loading={loading}
                >
                  {editingBuilding ? 'Update' : 'Create'}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Buildings;