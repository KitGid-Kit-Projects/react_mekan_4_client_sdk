import { Button, Card, Col, Layout, Row, Statistic } from "antd";
import { 
  PlusOutlined 
} from '@ant-design/icons';
const { Content } = Layout;
const DashBoardContent=({userProfile,quickActions,navigate})=>{
return (
          <Content className="p-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome, {userProfile?.displayName}!
            </h1>
            <p className="text-lg text-muted-foreground">
              {userProfile?.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
            </p>
          </div>

          <Row gutter={[24, 24]} className="mb-8">
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic
                  title="Your Role" 
                  value={userProfile?.role} 
                  valueStyle={{ color: '#1890ff', textTransform: 'capitalize' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Account Status" 
                  value="Active"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Statistic 
                  title="Member Since" 
                  value={new Date(userProfile?.createdAt || Date.now()).toLocaleDateString()}
                />
              </Card>
            </Col>
          </Row>

          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
          <Row gutter={[24, 24]}>
            {quickActions.map((action, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card 
                  hoverable
                  className="h-full"
                  onClick={() => navigate(action.path)}
                >
                  <div className="text-center">
                    <div className="mb-4">{action.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <Button type="primary" icon={<PlusOutlined />}>
                      Go
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
)
}
export default DashBoardContent