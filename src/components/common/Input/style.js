import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:disabled {
    color: #2d394b;
  }
`;
