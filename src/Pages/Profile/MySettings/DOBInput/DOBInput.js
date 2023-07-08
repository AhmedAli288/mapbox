import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DOBInput = ({ selectedDate, setSelectedDate }) => {
  const [parsedDate, setParsedDate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      const parsed = parse(selectedDate, "dd/MM/yyyy", new Date());
      setParsedDate(parsed);
    } else {
      setParsedDate(null);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    const formatted = date ? format(date, "dd/MM/yyyy") : "";
    setSelectedDate(formatted);
  };

  return (
    <div className="customDatePicker">
      <DatePicker
        selected={parsedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className="customDatePickerInput width94"
        customInput={
          <input
            className="customDatePickerInputField"
            readOnly
            value={selectedDate || ""}
          />
        }
        popperPlacement="top-start"
      />
      <button
        className="calendarButton"
        onClick={() =>
          document.querySelector(".customDatePickerInputField").click()
        }
      >
        <CalendarMonthIcon />
      </button>
    </div>
  );
};

export default DOBInput;
