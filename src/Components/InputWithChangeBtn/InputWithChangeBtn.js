import React, { useState, useRef } from "react";

const InputWithChangeBtn = ({
  initialValue,
  onValueChange,
  type,
  setEnabled = null,
}) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);
  const [isTypingEnabled, setIsTypingEnabled] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    onValueChange(event.target.value);
  };

  const handleStartTyping = () => {
    setIsTypingEnabled(true);
    setEnabled(false);
    inputRef.current.focus();
  };

  const handleInputClick = () => {
    if (!isTypingEnabled) {
      setIsTypingEnabled(true);
      setEnabled(false);
      inputRef.current.focus();
    }
  };

  return (
    <div className="inputWithChange">
      <input
        className="width94"
        type={type}
        value={value}
        onChange={handleInputChange}
        ref={inputRef}
        onClick={handleInputClick}
        readOnly={!isTypingEnabled}
        style={{
          pointerEvents: isTypingEnabled ? "auto" : "none",
        }}
      />
      <span onClick={handleStartTyping} className="inputWithChangeBtn">
        Change
      </span>
    </div>
  );
};

export default InputWithChangeBtn;
