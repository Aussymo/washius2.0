import Table from "react-bootstrap/Table";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Scheduler.css";
import { Appbar } from "../component/Appbar/Appbar";

export const Scheduler = () => {
  const { error, setError } = useState();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAllUser().catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <form className="form">
      <Appbar />
      <Table striped bordered hover variant="dark">
        <thead className="body">
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
                  <p>{u.full_name}</p>
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
                <td>
                  <input type="Time" placeholder="Time" />
                  <input type="Time" placeholder="Time" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button type="submit">Submit</button>
    </form>
  );
};
