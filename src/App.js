import React from "react";
import Header from "./components/header";
import Footerr from "./components/footer";
import Todos from "./components/todos";
import { useState, useEffect } from 'react';
import Addtodo from "./components/addtodo"
import About from "./components/about"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/App.css'

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("iamvanishing", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo=(title,desc)=>{
    if (todos.length === 0){
      const myTodo={
        sno:1,
        title:title,
        desc:desc,
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
    }else{
      let sno=todos[todos.length-1].sno+1;
      const myTodo={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,myTodo]);
      console.log("hdfi",myTodo)
    }
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
    return(
      <>
      <Router>
      <Header searchBar={false} />
      <Switch>
        
      <Route exact path="/" render={()=>{
        return(
          <>
          <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} ondelete={ondelete} />
      </>
        );

      }}>
          </Route>
          <Route exact path="/about" render={()=>{
            return(<> <About /></>)
          }}>
          </Route>
          
        </Switch>
      

      <Footerr /> 
      </Router>     
    </>
    );
}

export default App;
