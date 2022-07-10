import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import "../../../styles/Application.css";

export const Application = () => {
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
      <h1>Application Form</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTel">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" name="number" />
        </Form.Group>

        <h2 className="PosTitle">Position Information</h2>
        <Form.Group className="mb-3">
          <Form.Label>Date of Availability</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Availability"
            name="message"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Desired Wage</Form.Label>
          <Form.Control type="text" placeholder="Desired Wage" name="wage" />
        </Form.Group>
        <p>Type of Employment</p>
        <Form.Select name="employment">
          <option>Full Time</option>
          <option>Part Time</option>
        </Form.Select>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Skills</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Experience</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Education</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>References</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </Form>
    </div>
  );
};
