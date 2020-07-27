import React from 'react';
import Tabs from './materialUI/Tabs'
import ButtonDemo from './materialUI/ButtonDemo'
import CheckBoxDemo from './materialUI/CheckBoxDemo';
import RadioButtonDemo from './materialUI/RadioButtonDemo';
import CardDemo from './materialUI/CardDemo';
import NavBar from './materialUI/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tabs/>
     <ButtonDemo/>
     <CardDemo/>
    <CheckBoxDemo/>
    <RadioButtonDemo/>
    </div>
  );
}

export default App;
