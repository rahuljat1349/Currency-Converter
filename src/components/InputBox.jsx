import React, { useId } from "react";

function InputBox({ label, amountDisabled, amount, currency,onAmountChange }) {
  let id = useId();
  return (
    <div className="flex justify-between gap-6 bg-white p-2 rounded-md">
      <div className="flex flex-col">
        <label className="text-gray-500" htmlFor={id}>
          {label}
        </label>
        <input
          className="border-[1px] border-gray-400 border-solid rounded-md outline-none p-2"
          id={id}
          type="number"
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=>onAmountChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-500">Currency Type</label>
        <select className="border-[1px] border-gray-400 border-solid rounded-md outline-none p-2">
          <option value={currency}>{currency}</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
