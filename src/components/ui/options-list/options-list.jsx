import React from "react";
import { Option, Property } from "./styles";

function OptionsList({ list = [], delimiter = ": " }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {list.map((option, index) => (
        <Option key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimiter}
          </Property>
          {option.value}
        </Option>
      ))}
    </ul>
  );
}

export default OptionsList;
