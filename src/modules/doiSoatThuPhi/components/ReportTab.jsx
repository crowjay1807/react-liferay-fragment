import React from "react";
import ReportFilter from "./ReportFilter";
import ReportTable from "./ReportTable";
import TablePagination from "./TablePagination";

function ReportTab({
  dateRange,
  onDateChange,
  onSearch,
  dataSource,
  pagination = {},
}) {
  const { current = 1, pageSize = 10, total = 0, onChange } = pagination;

  return (
    <>
      <ReportFilter
        dateRange={dateRange}
        onDateChange={onDateChange}
        onSearch={onSearch}
      />
      <ReportTable dataSource={dataSource} />
      <TablePagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
      />
    </>
  );
}

export default ReportTab;
