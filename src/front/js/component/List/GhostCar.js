import { Button } from "bootstrap";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Appbar } from "../Appbar/Appbar.js";
import "../../../styles/GhostCar.css";

export const GhostCar = () => {
  const myFunction = () => {
    const element = document.getElementById(
      "conveyor",
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
      "Mammoth ear"
    );
    const x = document.createElement("input");
    element.appendChild(x);
  };
  const groupList = [
    "conveyor start",
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

  return (
    <div>
      <ListGroup as="ol" numbered>
        {groupList.map((item, i) => {
          return (
            <ListGroup.Item as="li" key={i}>
              {item}
              <div id="conveyor"></div>
              <button className="Green"></button>
              <button className="Yellow"></button>
              <button className="Red" onClick={() => myFunction()}></button>
            </ListGroup.Item>
          );
        })}
        <button>submit</button>
      </ListGroup>
    </div>
  );
};
