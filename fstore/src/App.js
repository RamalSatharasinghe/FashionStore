import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/sampleFunctionalComp';
import SampleComponent from './components/sampleClassComp';

function App() {
  return (
    <div className="App">
      <Sample></Sample>
      <SampleComponent></SampleComponent>
    </div>
  );
}

export default App;
