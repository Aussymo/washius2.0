import React from "react";
import { useState, useEffect } from "react";
import "../../styles/lists.css";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export const Lists = () => {
  const [todos, setTodos] = useState([
    "Sweep Lot",
    "Clean Vacuums",
    "Clean Bathrooms",
    "Clean Cameras",
    "Clean Arches",
  ]);
  // hoverstate from upmostly website, ?: is another way to put if else
  const [isShown, setisShown] = useState(false);
  const todo = todos.map((item, i) => {
    return (
      <div className="content" key={i}>
        <li
          onMouseEnter={() => setisShown({ state: true, index: i })}
          onMouseLeave={() => setisShown({ state: false, index: 0 })}
        >
          {item}{" "}
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
  const newTodos = (onKeyDownEvent) => {
    if (onKeyDownEvent.keyCode === 13) {
      let userInput = onKeyDownEvent.target.value;
      const newTodos = [...todos, userInput];
      setTodos(newTodos);
      onKeyDownEvent.target.value = "";
    }
  };
  return (
    <div className="container">
      <h1>5 A Day!</h1>
      <input
        onKeyDown={newTodos}
        type="text"
        id="fname"
        placeholder="Add a task"
        name="fname"
      ></input>
      <div>
        <ul>{todo}</ul>
        <div>
          <ul className="tasks">{todo.length} task(s) left</ul>
        </div>
      </div>
    </div>
  );
};
