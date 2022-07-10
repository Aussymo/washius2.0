import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

export const Damage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11ud0kg",
        "template_hj0ed6x",
        e.target,
        "vxCL0Au2qXpvkA_8l"
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
  return (
    <div>
      <h1>Incident Report</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTel">
          <Form.Label>Customer Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" name="number" />
        </Form.Group>

        <h1>Incident Information</h1>
        <Form.Group className="mb-3">
          <Form.Label>Date/Time of Incident</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Incident"
            name="date"
          />
          <Form.Control type="time" placeholder="00000" name="time" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Year</Form.Label>
          <Form.Control type="text" placeholder="Vehicle Year" name="year" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Make</Form.Label>
          <Form.Control type="text" placeholder="Vehicle Make" name="make" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text" placeholder="Vehicle Model" name="model" />
        </Form.Group>
        <p>Previous Damage</p>
        <Form.Select name="previous">
          <option>Yes</option>
          <option>No</option>
          <option>Unaware</option>
        </Form.Select>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Location of Damage On Vehicle</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description of Incident</Form.Label>
          <Form.Control as="textarea" rows={10} name="incident" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description of Vehicle Damage</Form.Label>
          <Form.Control as="textarea" rows={10} name="vehicle_damage" />
        </Form.Group>
        <br />
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Employee Name"
            name="employee"
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit Claim
        </Button>
      </Form>
    </div>
  );
};
