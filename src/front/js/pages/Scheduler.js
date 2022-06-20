import Table from "react-bootstrap/Table";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Scheduler.css";
import { Appbar } from "../component/Appbar/Appbar";
import { useHistory } from "react-router-dom";

export const Scheduler = () => {
  const { error, setError } = useState();
  const { store, actions } = useContext(Context);
  const [full_name, setFull_name] = useState("");
  const [day, setDay] = useState("");
  const [sunday, setSunday] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const history = useHistory("");

  const handleClick = (e) => {
    e.preventDefault();
    actions
      .schedule(full_name, day, start_time, end_time, history)
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    actions.getAllUser().catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <form onSubmit={handleClick} className="form">
      <Appbar />
      <Table striped bordered hover variant="dark">
        <thead className="body">
          <tr>
            <th value={day} onChange={(e) => setDay(e.target.value)}>
              Employee
            </th>
            <th value={sunday} onChange={(e) => setSunday(e.target.value)}>
              Sunday
            </th>
            <th value={monday} onChange={(e) => setMonday(e.target.value)}>
              Monday
            </th>
            <th value={tuesday} onChange={(e) => setTuesday(e.target.value)}>
              Tuesday
            </th>
            <th
              value={wednesday}
              onChange={(e) => setWednesday(e.target.value)}
            >
              Wednesday
            </th>
            <th value={thursday} onChange={(e) => setThursday(e.target.value)}>
              Thursday
            </th>
            <th value={friday} onChange={(e) => setFriday(e.target.value)}>
              Friday
            </th>
            <th value={saturday} onChange={(e) => setSaturday(e.target.value)}>
              Saturday
            </th>
          </tr>
        </thead>
        <tbody>
          {store.allUser.map((u) => {
            return (
              <tr key={u.id}>
                <td>
                  <p
                    value={full_name}
                    onChange={(e) => setFull_name(e.target.value)}
                  >
                    {u.full_name}
                  </p>
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="Time"
                    placeholder="Time"
                    value={start_time}
                    onChange={(e) => setStart_time(e.target.value)}
                  />
                  <input
                    type="Time"
                    placeholder="Time"
                    value={end_time}
                    onChange={(e) => setEnd_time(e.target.value)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button href="/schedler" className="submitbtn glow-on-hover">
        Submit
      </button>
    </form>
  );
};
