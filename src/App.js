import React from "react";
import Header from "./components/header";
import Footerr from "./components/footer";
import Todos from "./components/todos";
import { useState } from "react";
import Addtodo from "./components/addtodo"
import './css/App.css'

function App() {
  const ondelete = (todo) => {
    console.log("iamvanishing", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo=(title,desc)=>{
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
  };
  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go To The Market",
      desc: "YOU HAVE TO GET THIS JOB DONE",
    },
    {
      sno: 2,
      title: "Go To The mall",
      desc: "YOU HAVE TO GET THIS JOB DONE",
    },
    {
      sno: 3,
      title: "Go To The ghat",
      desc: "YOU HAVE TO GET THIS JOB DONE",
    },
  ]);
  return (
    <>
      <Header searchBar={false} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} ondelete={ondelete} />
      <Footerr />
    </>
  );
}

export default App;
