import { Layout, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
} from "../store/slices/counterSlice";
import { AppHeader } from "./AppHeader";

export const Home = () => {
  const counter = useSelector((store: any) => {
    return store.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader />
        <Content className="content">
          <Row justify="center">
            <Col span={16}>
              <h2>Home</h2>
            </Col>
            <Col span={16}>
              <h2>{counter}</h2>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(incrementAsync(5))}>
                + Async
              </button>
              <button onClick={() => dispatch(decrement())}>-</button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
