import { Row, Col, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

export const AppHeader = () => (
  <Header className="header">
    <Row justify="center">
      <Col span={16}>
        <h1>React Playground</h1>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/searchFilter">Search Filter</Link>
        </Space>
      </Col>
    </Row>
  </Header>
);
