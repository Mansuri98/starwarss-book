import React from "react";
import "./Filter.css";
import { Select, Input } from "antd";

const { Option } = Select;

const Filters = ({ onFilterChange }) => {
  return (
    <div className="Filters">
      <Input
        placeholder="Filter by Name"
        onChange={(e) => onFilterChange("name", e.target.value)}
        allowClear
        className="FilterInput"
      />

      <Input
        placeholder="Filter by Height"
        onChange={(e) => onFilterChange("height", e.target.value)}
        allowClear
        className="FilterInput"
      />

      <Input
        placeholder="Filter by Mass"
        onChange={(e) => onFilterChange("mass", e.target.value)}
        allowClear
        className="FilterInput"
      />

      <Select
        placeholder="Filter by Gender"
        onChange={(value) => onFilterChange("gender", value)}
        allowClear
        className="FilterSelect"
      >
        {/* Gender options */}
      </Select>

      <Select
        placeholder="Filter by Eye Color"
        onChange={(value) => onFilterChange("eyeColor", value)}
        allowClear
        className="FilterSelect"
      >
        {/* Eye color options */}
      </Select>

      <Select
        placeholder="Filter by Species Name"
        onChange={(value) => onFilterChange("speciesName", value)}
        allowClear
        className="FilterSelect"
      >
        {/* Species name options */}
      </Select>

      <Select
        placeholder="Filter by Home Planet"
        onChange={(value) => onFilterChange("homePlanet", value)}
        allowClear
        className="FilterSelect"
      >
        {/* Home planet options */}
      </Select>

      {/* Films might be more complex to filter if there are many,
          consider a different UI approach or a multiple select filter. */}
    </div>
  );
};

export default Filters;
