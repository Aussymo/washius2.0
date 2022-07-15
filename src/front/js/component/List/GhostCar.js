import { Button } from "bootstrap";
import React, { useState, useContext, useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Appbar } from "../Appbar/Appbar.js";
import "../../../styles/GhostCar.css";
import emailjs from "emailjs-com";

/// Need to figure out how to do e.target for map function

export const GhostCar = () => {
  const [checked, setChecked] = useState([]);
  const form = useRef();

  //alekreed98@gmail.com
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_slrpvmg",
        "template_oxjahzg",
        e.target,
        "pCLB211ENFXHLpwIj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

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
    "CTA",
    "Fusion bath",
    "Tire brushes",
    "Side blasters",
    "1st top brush",
    "Wrap 1 set (DS/PS)",
    "Fusion prime",
    "2nd set of wraps",
    "Bumper blast",
    "second CTA",
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
    <div className="list">
      <form as="ol" numbered onSubmit={sendEmail}>
        {groupList.map((item, i) => {
          return (
            <ListGroup.Item as="li" key={i}>
              {item}
              <input
                type="text"
                id={i}
                style={{ display: "none" }}
                name="message"
              />
              <button
                type="button"
                className="Green"
                onClick={() => hideInput(i)}
                name="good"
              ></button>
              <button
                type="button"
                className="Red"
                onClick={() => displayInput(i)}
              ></button>
            </ListGroup.Item>
          );
        })}
        <div className="submitdiv">
          <button
            type="submit"
            className="submitbtn glow-on-hover"
            value="send"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
