import React, { useState } from "react";
// import { Appbar } from "../Appbar";

export const GhostCar = () => {
  const checkList = [
    "Pre Soak",
    "Tire Brush",
    "Wrap Foam",
    "Top Brush",
    "Side Wraps",
    "Grill Brushes",
    "Top/Side Omni",
    "Spot Free",
    "Tire Shine",
    "Dryers",
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
    <div>
      {/* <Appbar /> */}
      <div className="checkList">
        <img
          src="https://cdn-icons-png.flaticon.com/512/20/20973.png"
          alt="ghost-car"
        />
        <div className="title">Ghost Car:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
