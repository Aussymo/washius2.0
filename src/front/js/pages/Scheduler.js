// import Table from "react-bootstrap/Table";
// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/Scheduler.css";
// import { Appbar } from "../component/Appbar/Appbar";
// import { useHistory } from "react-router-dom";

// export const Scheduler = () => {
//   const { store, actions } = useContext(Context);
//   const [error, setError] = useState(null);
//   const [full_name, setFull_name] = useState("");
//   const [sunday_start, setSunday_start] = useState();
//   const [monday_start, setMonday_start] = useState();
//   const [tuesday_start, setTuesday_start] = useState();
//   const [wednesday_start, setWednesday_start] = useState();
//   const [thursday_start, setThursday_start] = useState();
//   const [friday_start, setFriday_start] = useState();
//   const [saturday_start, setSaturday_start] = useState();
//   const [sunday_end, setSunday_end] = useState();
//   const [monday_end, setMonday_end] = useState();
//   const [tuesday_end, setTuesday_end] = useState();
//   const [wednesday_end, setWednesday_end] = useState();
//   const [thursday_end, setThursday_end] = useState();
//   const [friday_end, setFriday_end] = useState();
//   const [saturday_end, setSaturday_end] = useState();
//   const history = useHistory("");

//   const handleClick = (e) => {
//     console.log("this is sunday start", sunday_start);
//     e.preventDefault();
//     actions
//       .schedule(
//         full_name,
//         sunday_start,
//         sunday_end,
//         monday_start,
//         monday_end,
//         tuesday_start,
//         tuesday_end,
//         wednesday_start,
//         wednesday_end,
//         thursday_start,
//         thursday_end,
//         friday_start,
//         friday_end,
//         saturday_start,
//         saturday_end,
//         history
//       )
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   useEffect(() => {
//     actions.getAllUser().catch((error) => {
//       setError(error);
//     });
//   }, []);

//   const myFunction = (e, index) => {
//     const uniqueUser = store.allUser;
//     if (uniqueUser[index]) {
//       setSunday_start(e.target.value);
//       setSunday_end(e.target.value);
//       setMonday_start(e.target.value);
//       setMonday_end(e.target.value);
//       setTuesday_start(e.target.value);
//       setTuesday_end(e.target.value);
//       setWednesday_start(e.target.value);
//       setWednesday_end(e.target.value);
//       setThursday_start(e.target.value);
//       setThursday_end(e.target.value);
//       setFriday_start(e.target.value);
//       setFriday_end(e.target.value);
//       setSaturday_start(e.target.value);
//       setSaturday_end(e.target.value);
//     }
//   };

//   return (
//     <div>
//       <Appbar />;
//       <form onSubmit={handleClick} className="form">
//         <Table striped bordered hover variant="dark">
//           <thead className="body">
//             <tr>
//               <th>Employee</th>
//               <th>Sunday</th>
//               <th>Monday</th>
//               <th>Tuesday</th>
//               <th>Wednesday</th>
//               <th>Thursday</th>
//               <th>Friday</th>
//               <th>Saturday</th>
//             </tr>
//           </thead>
//           <tbody>
//             {store.allUser.map((u) => {
//               return (
//                 <tr key={u.id}>
//                   <td>
//                     <p
//                       value={u.full_name}
//                       onChange={(e) => setFull_name(e.target.value)}
//                     >
//                       {u.full_name}
//                     </p>
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={sunday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={sunday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={monday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={monday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={tuesday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={tuesday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={wednesday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={wednesday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={thursday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={thursday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={friday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={friday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={saturday_start}
//                       onChange={myFunction(u.id)}
//                     />
//                     <input
//                       type="Time"
//                       placeholder="Time"
//                       value={saturday_end}
//                       onChange={myFunction(u.id)}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       href="/schedler"
//                       className="submitbtn glow-on-hover"
//                     >
//                       Submit
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </form>
//     </div>
//   );
// };
