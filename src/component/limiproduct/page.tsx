"use client";
import React from "react";
import { Row, Col, Card } from "antd";
import { PlusCircleOutlined, HeartOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
const { Meta } = Card;

interface itemLength {
  limit: number;
}
function LimitProduct({ limit = 4 }: itemLength) {
  return (
    <main className={style.main}>
      <h2 className="font-32">Product</h2>
      <Row gutter={16} justify={"center"}>
        {Array(limit)
          .fill(null)
          .map((_, i) => {
            return (
              <Col key={i} style={{ marginBottom: "2rem" }}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <PlusCircleOutlined key="add" />,
                    <HeartOutlined key="heart" />,
                  ]}
                >
                  <Meta
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            );
          })}
      </Row>
    </main>
  );
}

export default LimitProduct;
