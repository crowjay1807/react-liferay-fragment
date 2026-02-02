import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, DesktopOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { StyledLayout, StyledHeader, StyledContent } from "./style";
import { menuItems } from "../../../router/menuConfig";

const { Sider } = Layout;

const menuIcons = {
  "/": HomeOutlined,
  "/van-phong-dien-tu": DesktopOutlined,
  "/doi-soat-thu-phi": FileTextOutlined,
  "/cong-thong-tin-nhan-su": TeamOutlined,
};

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = menuItems.map((item) => ({
    key: item.key,
    icon: React.createElement(menuIcons[item.key] || HomeOutlined),
    label: item.label,
    onClick: () => navigate(item.key === "/" ? "/" : item.key),
  }));

  return (
    <StyledLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]} items={items} />
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
        </StyledHeader>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}

export default MainLayout;
