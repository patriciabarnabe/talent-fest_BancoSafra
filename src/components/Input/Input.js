import React from "react";


function Input({
    inputType,
    inputName,
    inputPlaceholder,
    inputValue,
    inputChange,
    inputClassName
  }) {
    return (
      <input type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputChange}
        className={inputClassName}
        autoComplete='OFF'
      >
      </input>
    )
  }
  export default Input;