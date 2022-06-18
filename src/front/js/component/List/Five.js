import React from "react";
import { useState, useEffect } from "react";
import "../../../styles/Five.css";

/// havent even began editing this

export function Five() {
  const [todos, setTodos] = useState([
    { label: "Sweep Lot", done: false },
    { label: "Make the bed", done: false },
    { label: "Walk the dog", done: false },
    { label: "Do the replits", done: false },
  ]);
  const [data, setData] = useState([
    { label: "Make the bed", done: false },
    { label: "Walk the dog", done: false },
    { label: "Do the replits", done: false },
  ]);
  // hoverstate from upmostly website, ?: is another way to put if else
  const [isShown, setisShown] = useState(false);

  const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/austin";

  const fetchTodos = () => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("This is an error:", error));
    console.log(todos);
  };

  const addTodo = () => {
    const brandNewTodos = [...todos, { label: data, done: false }];
    setTodos(brandNewTodos);
    return fetch(apiURL, {
      method: "PUT",
      body: JSON.stringify(brandNewTodos),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
    // .then((resp) => JSON.stringify(resp))
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const todo = todos.map((item, i) => {
    return (
      <div className="content" key={i}>
        <li
          onMouseEnter={() => setisShown({ state: true, index: i })}
          onMouseLeave={() => setisShown({ state: false, index: 0 })}
        >
          {item.label}{" "}
          {isShown.state === true && isShown.index === i ? (
            <button onClick={() => removeItem(i)}>
              <strong>X</strong>
            </button>
          ) : (
            ""
          )}
        </li>
      </div>
    );
  });
  const removeItem = (index) => {
    const newArray = todos.filter((item, i) => i != index);
    setTodos(newArray);
  };
  // on key down event is when user pushes button down. #13 is enter key
  const newTodos = (event) => {
    {
      // if (onKeyDownEvent.keyCode === 13) {
      setData(event.target.value);
      // const brandNewTodos = [...todos, { label: userInput, done: false }];
      // setTodos(brandNewTodos);
      // onKeyDownEvent.target.value = "";
    }
  };
  return (
    <div className="container">
      <h1>5 A Day!</h1>
      <div className="input-group">
        <input
          onChange={newTodos}
          type="text"
          className="form-control"
          placeholder="Add a task"
        />
        <button
          id="addbtn"
          type="submit"
          className="btn btn-success"
          onClick={addTodo}
        >
          add
        </button>
      </div>
      <div>
        <ul>{todo}</ul>
        <div>
          <ul className="tasks">{todo.length} task(s) left</ul>
        </div>
      </div>
    </div>
  );
}
