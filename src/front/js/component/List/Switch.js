import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../../styles/Switch.css";

export const Switch = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = [
    "Get Report",
    "Empty Trash Cans",
    "Stock Rags",
    "Inspect Vacuum Quality",
    "Walk Tunnel",
    "Stock Cleaners",
    "Sweep Entire Lot",
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
    <div className="Switch">
      <div className="checkList">
        <div>
          <h1 className="shifttitle">Shift Switch:</h1>
        </div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input
                className="check"
                value={item}
                type="checkbox"
                onChange={handleCheck}
              />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>{`Items checked are: ${checkedItems}`}</div>
    </div>
  );
};
