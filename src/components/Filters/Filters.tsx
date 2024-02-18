import React from "react";
import "./Filter.css";
import { Select, Input } from "antd";

const { Option } = Select;

interface FiltersProps {
  onFilterChange: (filterType: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const eyeColorOptions = [
    "red",
    "yellow",
    "blue",
    "brown",
    "black",
    "blue-gray",
    "n/a",
  ];

  const hairColorOptions = [
    "black",
    "brown, grey",
    "brown",
    "auburn, white",
    "blond",
    "blue",
    "n/a",
  ];

  const genderOptions = ["male", "female", "n/a"];

  return (
    <div className="Filters">
      <Input
        placeholder="Filter by Name"
        onChange={(e) => onFilterChange("name", e.target.value)}
        allowClear
        className="FilterInput"
      />
      <Select
        placeholder="Filter by Gender"
        onChange={(value) => onFilterChange("gender", value)}
        allowClear
        className="FilterSelect"
      >
        {genderOptions.map((gender) => (
          <Option key={gender} value={gender}>
            {gender}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Filter by Eye Color"
        onChange={(value) => onFilterChange("eyeColor", value)}
        allowClear
        className="FilterSelect"
      >
        {eyeColorOptions.map((color) => (
          <Option key={color} value={color}>
            {color}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Filter by Hair Color"
        onChange={(value) => onFilterChange("hairColor", value)}
        allowClear
        className="FilterSelect"
      >
        {hairColorOptions.map((color) => (
          <Option key={color} value={color}>
            {color}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Filters;
