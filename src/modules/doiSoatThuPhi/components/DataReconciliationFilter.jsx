import React from "react";
import { Select } from "antd";
import { CSelect, CButton, CDatePicker } from "../../../components/common";
import { FilterSection, FilterRow, FilterItem } from "../style";
import { LOAI_GD_LECH_OPTIONS } from "./constants";

const { Option: SelectOption } = Select;

function DataReconciliationFilter({ dateRange, onDateChange, onSearch }) {
  return (
    <FilterSection>
      <FilterRow>
        <FilterItem>
          <span className="filter-label">Tuyến</span>
          <CSelect placeholder="Nội bài - Lào Cai" style={{ width: 160 }} allowClear>
            <SelectOption value="nb-lc">Nội bài - Lào Cai</SelectOption>
          </CSelect>
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Trạm</span>
          <CSelect placeholder="Chọn trạm" style={{ width: 120 }} allowClear>
            <SelectOption value="km6">Km6</SelectOption>
            <SelectOption value="ic13">IC13</SelectOption>
          </CSelect>
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Mã Etag</span>
          <CSelect placeholder="Chọn" style={{ width: 120 }} allowClear />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Mã GD BE</span>
          <CSelect placeholder="Chọn" style={{ width: 120 }} allowClear />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Biển số xe</span>
          <CSelect placeholder="Chọn" style={{ width: 120 }} allowClear />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Loại GD</span>
          <CSelect placeholder="Chọn" style={{ width: 100 }} allowClear />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Loại giao dịch lệch</span>
          <CSelect
            mode="multiple"
            placeholder="Chọn"
            style={{ minWidth: 200 }}
            options={LOAI_GD_LECH_OPTIONS}
            maxTagCount="responsive"
          />
        </FilterItem>
      </FilterRow>
      <FilterRow $last>
        <FilterItem>
          <span className="filter-label">Loại sai lệch</span>
          <CSelect placeholder="Chọn" style={{ width: 140 }} allowClear />
        </FilterItem>
        <FilterItem>
          <span className="filter-label">Trạng thái giải trình</span>
          <CSelect placeholder="Chọn" style={{ width: 160 }} allowClear />
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

export default DataReconciliationFilter;
