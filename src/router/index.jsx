import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { memo } from "react";
import { MainLayout } from "../components/layout";
import { VanPhongDienTuPage, DoiSoatThuPhiPage, CongThongTinNhanSuPage } from "../modules";

function HomePlaceholder() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Nội dung trang chủ.</p>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePlaceholder />} />
          <Route path="van-phong-dien-tu" element={<VanPhongDienTuPage />} />
          <Route path="doi-soat-thu-phi" element={<DoiSoatThuPhiPage />} />
          <Route path="cong-thong-tin-nhan-su" element={<CongThongTinNhanSuPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default memo(AppRouter);
