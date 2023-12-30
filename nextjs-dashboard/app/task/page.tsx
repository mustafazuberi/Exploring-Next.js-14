"use client";
import React, { useState } from "react";

const getReversedString = (myString: string) =>
  myString.split(" ").reverse().join(" ");

const Task = () => {
  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < input.length) return;

    if (val.length - 1 === input.length) {
      setInput(val);
      setDisplayValue(val);
    }
  };

  return (
    <div className="p-12">
      <h1>TASK</h1>
      <input type="text" onChange={handleInputChange} />
      {!!input && <div>{getReversedString(displayValue)}</div>}
    </div>
  );
};

export default Task;
