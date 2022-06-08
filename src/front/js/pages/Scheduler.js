import Table from "react-bootstrap/Table";
import React from "react";

import "../../styles/Scheduler.css";

export const Scheduler = () => {
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
