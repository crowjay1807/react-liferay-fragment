/**
 * Cấu hình path và menu cho MainLayout
 */
export const paths = {
  trangChu: "/",
  vanPhongDienTu: "/van-phong-dien-tu",
  doiSoatThuPhi: "/doi-soat-thu-phi",
  congThongTinNhanSu: "/cong-thong-tin-nhan-su",
};

/**
 * Menu items cho sidebar (key = path để highlight active)
 */
export const menuItems = [
  { key: paths.trangChu, label: "Trang chủ" },
  { key: paths.vanPhongDienTu, label: "Văn phòng điện tử" },
  { key: paths.doiSoatThuPhi, label: "Đối soát thu phí" },
  { key: paths.congThongTinNhanSu, label: "Cổng thông tin nhân sự" },
];
