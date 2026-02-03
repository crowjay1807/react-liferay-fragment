import React from "react";
import DataReconciliationFilter from "./DataReconciliationFilter";
import DataReconciliationTable from "./DataReconciliationTable";
import TablePagination from "./TablePagination";

function DataReconciliationTab({
  dateRange,
  onDateChange,
  onSearch,
  dataSource,
  onView,
  pagination = {},
}) {
  const { current = 1, pageSize = 10, total = 0, onChange } = pagination;

  return (
    <>
      <DataReconciliationFilter
        dateRange={dateRange}
        onDateChange={onDateChange}
        onSearch={onSearch}
      />
      <DataReconciliationTable dataSource={dataSource} onView={onView} />
      <TablePagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
      />
    </>
  );
}

export default DataReconciliationTab;
