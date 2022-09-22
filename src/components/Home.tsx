import { Layout, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { AppHeader } from "./AppHeader";

export const Home = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader />
        <Content className="content">
          <Row justify="center">
            <Col span={16}>
              <h2>Home</h2>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
