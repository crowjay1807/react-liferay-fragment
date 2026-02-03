import React, { useState } from "react";
import dayjs from "dayjs";
import { CTabs } from "../../components/common";
import { PageWrap } from "./style";
import {
  DataReconciliationTab,
  ReportTab,
  mockDataReconciliation,
  mockDataReport,
} from "./components";

function DoiSoatThuPhiPage() {
  const [activeTab, setActiveTab] = useState("data");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalData = 5709;
  const [dateRange, setDateRange] = useState([dayjs("2025-12-01"), dayjs("2025-12-30")]);

  const paginationConfig = {
    current: page,
    pageSize,
    total: totalData,
    onChange: (p, size) => {
      setPage(p);
      setPageSize(size || 10);
    },
  };

  return (
    <PageWrap>
      <CTabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: "data",
            label: "ĐỐI SOÁT DỮ LIỆU",
            children: (
              <DataReconciliationTab
                dateRange={dateRange}
                onDateChange={setDateRange}
                onSearch={() => { }}
                dataSource={mockDataReconciliation}
                onView={(record) => console.log("View", record)}
                pagination={paginationConfig}
              />
            ),
          },
          {
            key: "report",
            label: "BÁO CÁO ĐỐI SOÁT",
            children: (
              <ReportTab
                dateRange={dateRange}
                onDateChange={setDateRange}
                onSearch={() => { }}
                dataSource={mockDataReport}
                pagination={paginationConfig}
              />
            ),
          },
        ]}
      />
    </PageWrap>
  );
}

export default DoiSoatThuPhiPage;
