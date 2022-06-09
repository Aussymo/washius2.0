import Table from "react-bootstrap/Table";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Scheduler.css";

export const Scheduler = () => {
  const { error, setError } = useState();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAllUsers().catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <form className="form">
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
          <tr>
            <td>
              <p>{store.full_name}</p>
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
          <tr>
            <td>
              <input type="employee" placeholder="employee" />
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
          <tr>
            <td>
              <input type="employee" placeholder="employee" />
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
          <tr>
            <td>
              <input type="employee" placeholder="employee" />
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
          <tr>
            <td>
              <input type="employee" placeholder="employee" />
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
          <tr>
            <td>
              <input type="employee" placeholder="employee" />
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
        </tbody>
      </Table>
      <button type="button">Send</button>
    </form>
  );
};
