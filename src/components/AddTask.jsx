import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    onAdd(inputValue); 
    setInputValue("");
  };
  return (
    <div className="mt-2 flex gap-2">
      <button className="bg-[#99163d] text-white px-9 rounded-md py-2 cursor-pointer" onClick={handleSubmit}>
        إضافة مهمة
      </button>
      <input
        type="text"
        placeholder="عنوان المهمة"
        value={inputValue}
        onChange={(e)=>{setInputValue(e.target.value)}}
        className="p-2 rounded-md border-2 border-gray-400 flex-1"
      ></input>
    </div>
  );
};

export default AddTask;
