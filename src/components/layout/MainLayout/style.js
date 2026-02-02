import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledHeader = styled(Layout.Header)`
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

export const StyledContent = styled(Layout.Content)`
  margin: 24px;
  padding: 24px;
  min-height: 280px;
  background: #fff;
  border-radius: 8px;
`;
