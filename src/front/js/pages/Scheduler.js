import Table from "react-bootstrap/Table";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/Scheduler.css";
import { Appbar } from "../component/Appbar/Appbar";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

export const Scheduler = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState(null);
  const [full_name, setFull_name] = useState("");
  const [sunday_start, setSunday_start] = useState();
  const [monday_start, setMonday_start] = useState();
  const [tuesday_start, setTuesday_start] = useState();
  const [wednesday_start, setWednesday_start] = useState();
  const [thursday_start, setThursday_start] = useState();
  const [friday_start, setFriday_start] = useState();
  const [saturday_start, setSaturday_start] = useState();
  const [sunday_end, setSunday_end] = useState();
  const [monday_end, setMonday_end] = useState();
  const [tuesday_end, setTuesday_end] = useState();
  const [wednesday_end, setWednesday_end] = useState();
  const [thursday_end, setThursday_end] = useState();
  const [friday_end, setFriday_end] = useState();
  const [saturday_end, setSaturday_end] = useState();
  const history = useHistory("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_adf8ofu",
        "template_jp4cmac",
        e.target,
        "4JcPiVmGnp1I0hXn0"
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
  useEffect(() => {
    actions.getAllUser().catch((error) => {
      setError(error);
    });
  }, []);

  const myFunction = (e, index) => {
    const uniqueUser = store.allUser;
    if (uniqueUser[index]) {
      setSunday_start(e.target.value);
      setSunday_end(e.target.value);
      setMonday_start(e.target.value);
      setMonday_end(e.target.value);
      setTuesday_start(e.target.value);
      setTuesday_end(e.target.value);
      setWednesday_start(e.target.value);
      setWednesday_end(e.target.value);
      setThursday_start(e.target.value);
      setThursday_end(e.target.value);
      setFriday_start(e.target.value);
      setFriday_end(e.target.value);
      setSaturday_start(e.target.value);
      setSaturday_end(e.target.value);
    }
  };

  return (
    <div>
      <Appbar />;
      <form ref={form} onSubmit={sendEmail} className="Schedform">
        <Table striped bordered hover variant="dark">
          <thead className="Schedbody">
            <tr>
              <th>Employee</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {store.allUser.map((u) => {
              return (
                <tr key={u.id}>
                  <td>
                    <div
                      name="name"
                      //   value={u.full_name}
                      //   onChange={(e) => setFull_name(e.target.value)}
                    >
                      {u.full_name}
                    </div>
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={sunday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={sunday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={monday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={monday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={tuesday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={tuesday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={wednesday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={wednesday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={thursday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={thursday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={friday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={friday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <input
                      type="Time"
                      placeholder="Time"
                      value={saturday_start}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                    <input
                      type="Time"
                      placeholder="Time"
                      value={saturday_end}
                      onChange={myFunction(u.id)}
                      name="message"
                    />
                  </td>
                  <td>
                    <button
                      href="/scheduler"
                      className="submitbtn glow-on-hover"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </form>
    </div>
  );
};
