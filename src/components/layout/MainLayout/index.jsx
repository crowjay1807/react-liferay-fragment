import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { StyledLayout, StyledHeader, StyledContent, StyledTitle } from "./style";
import LeftMenu from "./components/LeftMenu";
import { menuSections } from "../../../router/menuConfig";

const { Sider } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pathname = useLocation().pathname;
  const listFlatMenu = menuSections.flatMap((section) => section.items);
  const currentMenu = listFlatMenu.find((item) => item.key === pathname);

  return (
    <StyledLayout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
        <div className="demo-logo-vertical" />
        <LeftMenu collapsed={collapsed} />
      </Sider>
      <Layout>
        <StyledHeader style={{ background: colorBgContainer, padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <StyledTitle>{currentMenu?.label}</StyledTitle>
        </StyledHeader>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}

export default MainLayout;
