import React from "react";

export default function Todo({ todo, ondelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-danger btn-sm btn-primary"
        onClick={() => {
          ondelete(todo);
        }}
      >
        Delete Me
      </button>
    </div>
  );
}
