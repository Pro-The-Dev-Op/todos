import React from "react";
import Headerr from './components/header';
import Footerr from './components/footer';
import Todos from './components/todos';

import './css/App.css'
function App() {
  return (
    <>
    <Headerr  searchBar={false}/>
    <Footerr/>
    <Todos/>
    </>
  );
}

export default App;