import React, { useState } from "react";

export const Closing = () => {
  const checkList = [
    "Turn System Off",
    "Turn Vacuums Off",
    "Turn Air Detailers Off",
    "Check Chem Levels",
    "Bring in Rags",
    "Fill Up Cleaners",
    "Check Vacuum Quality",
    "Sweep Entire Lot",
    "Empty All Trash",
    "Clean Out Vacuum Cyclones",
    "Load Washer and Dryers",
    "Pick Up Trash Inside Tunnel",
    "Clean Tunnel Floor",
    "Clean Tunnel Walls",
    "Put Cones Out",
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
        src="http://cdn.onlinewebfonts.com/svg/img_61536.png"
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
