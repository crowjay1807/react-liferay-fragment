import React from "react";
import "@ant-design/v5-patch-for-react-19";
import "./App.css";

import { ConfigProvider } from "antd";
import AppRouter from "./router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
          colorPrimary: "#0090CF",
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
