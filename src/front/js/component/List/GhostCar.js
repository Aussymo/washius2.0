import { Button } from "bootstrap";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Appbar } from "../Appbar/Appbar.js";
import "../../../styles/GhostCar.css";

/// Need to figure out how to do e.target for map function

export const GhostCar = () => {
  const myFunction = () => {
    const element = document.getElementById("conveyor");

    const x = document.createElement("input");
    element.appendChild(x);
  };

  const groupList = [
    "Conveyor start",
    "Undercarriage",
    "Pre soak",
    "Back windshield spray",
    "Scented spray",
    "CTA’s",
    "Fusion bath",
    "Tire brushes",
    "Side blasters",
    "1st top brush",
    "Wrap 1 set (DS/PS)",
    "Fusion prime",
    "2nd set of wraps",
    "Bumper blast",
    "More CTA’s",
    "Grill brushes",
    "Top Omni",
    "Side omnis",
    "Fusion wax",
    "Ceramic shine",
    "Top brush 2",
    "Fusion rinse",
    "Fusion seal",
    "Rain repel",
    "Clear coat protectant",
    "Tireshine",
    "Dryers",
    "Mammoth ear",
  ];
  const displayInput = (i) => {
    document.getElementById(i).style.display = "block";
  };
  const hideInput = (i) => {
    document.getElementById(i).style.display = "none";
  };
  return (
    <div>
      <ListGroup as="ol" numbered>
        {groupList.map((item, i) => {
          return (
            <ListGroup.Item as="li" key={i}>
              {item}
              <input type="text" id={i} style={{ display: "none" }} />
              <button className="Green" onClick={() => hideInput(i)}></button>
              <button className="Red" onClick={() => displayInput(i)}></button>
            </ListGroup.Item>
          );
        })}
        <div className="submitdiv">
          <button className="submitbtn glow-on-hover">Submit</button>
        </div>
      </ListGroup>
    </div>
  );
};
