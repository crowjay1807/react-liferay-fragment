import React from "react";
import { Select } from "antd";
import { CSelect, CButton, CDatePicker } from "../../../components/common";
import { FilterSection, FilterRow, FilterItem } from "../style";

const { Option: SelectOption } = Select;

function ReportFilter({ dateRange, onDateChange, onSearch }) {
  return (
    <FilterSection>
      <FilterRow $last>
        <FilterItem>
          <span className="filter-label">Tuyến</span>
          <CSelect placeholder="Nội bài - Lào Cai" style={{ width: 180 }} allowClear>
            <SelectOption value="nb-lc">Nội bài - Lào Cai</SelectOption>
          </CSelect>
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Trạm</span>
          <CSelect placeholder="Km6" style={{ width: 120 }} allowClear>
            <SelectOption value="km6">Km6</SelectOption>
          </CSelect>
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Từ</span>
          <CDatePicker
            value={dateRange?.[0]}
            onChange={(d) => onDateChange?.([d, dateRange?.[1]])}
            format="DD/MM/YYYY"
            style={{ width: 130 }}
          />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Đến</span>
          <CDatePicker
            value={dateRange?.[1]}
            onChange={(d) => onDateChange?.([dateRange?.[0], d])}
            format="DD/MM/YYYY"
            style={{ width: 130 }}
          />
        </FilterItem>
        <CButton type="primary" onClick={onSearch}>
          Tìm kiếm
        </CButton>
      </FilterRow>
    </FilterSection>
  );
}

export default ReportFilter;
