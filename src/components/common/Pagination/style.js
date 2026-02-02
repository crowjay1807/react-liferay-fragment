import { Pagination } from "antd";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)`
  font-size: 13px;
  line-height: 20px;

  .ant-pagination-item {
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    font-size: 13px;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    min-width: 32px;
    height: 32px;
    line-height: 30px;
  }
`;
