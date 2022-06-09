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
    </div>
  );
};
