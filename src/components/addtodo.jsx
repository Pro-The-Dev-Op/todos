import React from 'react';
import { useState } from "react";

export default function Addtodo({addTodo}) {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const submit=(e)=>{
    e.preventDefault(e)
    if (!title || !desc){
      alert("title or description cannot be empty");
    }else{
      addTodo(title,desc);
    }
   
  }
  return (
  <div className="container my-3" style={{marginTop: '25px',}}>
    <h3 className=" text-6xl">Add A Todo</h3>
    <div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="desc"
            value={desc}
            className="form-control"
            onChange={(e)=>{setDesc(e.target.value)}}
            id="desc"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit"  className="btn btn-sm btn-success btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
    );
}
