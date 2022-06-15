import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../../styles/Opening.css";

export const Opening = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Turn Computers on",
    "Inspect Chemicals",
    "Turn Compressors On",
    "Turn Vacuums On",
    "Stock Rags",
    "Stock Cleaners",
    "Check Vacuum Quality",
    "Inspect Air Detailers",
    "Inspect Curb-Line for Trash",
    "Sweep Entire Lot",
    "Move Cones",
  ];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="Opening">
      <div className="checkList">
        <div className="title">Opening Day:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>{`Items checked are: ${checkedItems}`}</div>
      <button>Send</button>
    </div>
  );
};
