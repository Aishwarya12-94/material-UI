import React from 'react';
import Tabs from './materialUI/Tabs'
import ButtonDemo from './materialUI/ButtonDemo'
import CheckBoxDemo from './materialUI/CheckBoxDemo';
import RadioButtonDemo from './materialUI/RadioButtonDemo';
import CardDemo from './materialUI/CardDemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs/>
     <ButtonDemo/>
     <CardDemo/>
    <CheckBoxDemo/>
    <RadioButtonDemo/>
    </div>
  );
}

export default App;
