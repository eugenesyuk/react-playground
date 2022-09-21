import { Input, Layout, Row, Col, Space } from 'antd'
import './App.scss'
import { Content, Header } from 'antd/lib/layout/layout'

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Space direction="vertical" size={50}>
          <Header className="header">
            <Row justify="center">
              <Col span={16}>
                <h1>React Playground</h1>
              </Col>
            </Row>
          </Header>
          <Content className="content">
            <Row justify="center">
              <Col span={16}>
                <Input type="text" placeholder="Search..." />
              </Col>
            </Row>
          </Content>
        </Space>
      </Layout>
    </div>
  )
}

export default App
