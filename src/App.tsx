import { Input, Layout, Row, Col, Space, Table } from 'antd'
import './App.scss'
import { Content, Header } from 'antd/lib/layout/layout'
import { Users } from './data/users'
import { useEffect, useState } from 'react'

const tableColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Surname',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  }
]

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(Users);

  useEffect(() => {
      const usersFiltered = Users.filter((item) => {
        return item.first_name.toLowerCase().includes(query.toLowerCase());
      });
    
      setUsers(usersFiltered);
  }, [query])

  return (
    <div className="App">
      <Layout className="layout">
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
              <Space direction="vertical" size={20}>
                <Input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Table dataSource={users} columns={tableColumns} />;
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default App
