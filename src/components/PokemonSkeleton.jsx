import { Col, Row } from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PokemonSkeleton = () => {
  return (
    <Row>
      {[...Array(10)].map((_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ marginBottom: 20 }}>
            <Skeleton height={150} width={150} />
            <Skeleton height={20} width={150} style={{ marginTop: 10 }} />
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default PokemonSkeleton;
