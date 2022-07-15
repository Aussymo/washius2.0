import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

export const Customer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm;
    "service_11ud0kg",
      "template_hj0ed6x",
      e.target,
      "vxCL0Au2qXpvkA_8l"().then(
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
      <h1>Customer Information</h1>
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
        <Form.Group className="mb-3">
          <Form.Label> Date</Form.Label>
          <Form.Control type="date" placeholder="Date" name="date" />
        </Form.Group>
        <h1>Customer Request</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={15} name="incident" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTel">
          <Form.Label>Does Customer want a call back</Form.Label>
          <Form.Control type="text" placeholder="Answer" name="message" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
