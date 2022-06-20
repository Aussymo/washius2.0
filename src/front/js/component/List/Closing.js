import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../../styles/Closing.css";

export const Closing = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Inspect Chemicals",
    "Turn Compressors Off",
    "Pull Rags",
    "Pull/Refill Cleaners",
    "Empty Trash Bins",
    "Check Vacuum Quality",
    "Inspect Air Detailers",
    "Inspect Curb-Line for Trash",
    "Sweep Entire Lot",
    "Turn Vacuums Off",
    "Turn Computers Off",
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
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="Closing">
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
