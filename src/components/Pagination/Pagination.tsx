import React from "react";
import { Pagination } from "antd";
import "./Pagination.css";

const CustomPagination = ({ current, onChange, total }) => {
  return <Pagination current={current} onChange={onChange} total={total} />;
};

export default CustomPagination;
