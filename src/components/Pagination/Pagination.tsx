import React from "react";
import { Pagination } from "antd";
import "./Pagination.css";

interface CustomPaginationProps {
  current: number;
  onChange: (page: number, pageSize?: number) => void;
  total: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  onChange,
  total,
}) => {
  return <Pagination current={current} onChange={onChange} total={total} />;
};

export default CustomPagination;
