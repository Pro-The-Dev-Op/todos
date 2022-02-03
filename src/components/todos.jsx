import React from "react";
import Todo from "./todo";

export default function Todos(props) {
  return (
    <div className="container" style={{marginTop: '80px'}}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0
        ? "no todos to display" 
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} ondelete={props.ondelete} />
            );
          })}
    </div>
  );
}
