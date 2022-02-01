import React from "react";
import Header from './components/header';
import Footerr from './components/footer';
import Todos from './components/todos';

function App() {
  let todos = [
  {
    sno:1,
    title: 'Go To The Market',
    desc: 'YOU HAVE TO GET THIS JOB DONE'
  },
  {
    sno:2,
    title: 'Go To The mall',
    desc: 'YOU HAVE TO GET THIS JOB DONE'
  },
  {
    sno:3,
    title: 'Go To The ghat',
    desc: 'YOU HAVE TO GET THIS JOB DONE'
  }
];
  return (
    <>
    <Header  searchBar={false}/>
    <Todos todos={todos} />
    <Footerr/>
    </>
  );
}

export default App;