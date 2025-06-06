import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from "./Components/NavComponent";
import FooterComponent from "./Components/FooterComponent";
import MainComponent from "./Components/MainComponent";
import LeftDecComponent from "./Components/LeftDecComponent";

function App() {
  return (
      <div className="App">
          <NavComponent></NavComponent>
          <MainComponent></MainComponent>
          <LeftDecComponent></LeftDecComponent>
          <FooterComponent></FooterComponent>
      </div>
  );
}

export default App;
