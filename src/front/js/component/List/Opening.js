import React, { useState } from "react";


export const Opening = () => {
  const checkList = [
    "Turn System On",
    "Turn Vacuums On",
    "Turn Air Detailers On",
    "Check Chem Levels",
    "Stock Rags",
    "Stock Cleaners",
    "Check Vacuum Quality",
    "Sweep",
    "Load Washer and Dryers",
    "Move Cones",
  ];

  const [checked, setChecked] = useState([]);

=======
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


  return (
    <div className="checkList">
      <img
        src="https://cdn-icons-png.flaticon.com/512/59/59802.png"
        alt="ghost-car"
      />
      <div className="title">Opening Procedure:</div>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span>{item}</span>
          </div>
        ))}
      </div>

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
