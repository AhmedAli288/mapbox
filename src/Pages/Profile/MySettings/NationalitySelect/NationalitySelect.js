import React from "react";
import { nationalities } from "../../../../Constants/Nationalities";

const NationalitySelect = ({ selectedNationality, setSelectedNationality }) => {
  const handleChange = (event) => {
    setSelectedNationality(event.target.value);
  };

  return (
    <div className="nationalitySelectBox">
      <select
        id="nationality-select"
        value={selectedNationality}
        onChange={handleChange}
        className="nationalitySelect width100"
      >
        {nationalities.map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NationalitySelect;
