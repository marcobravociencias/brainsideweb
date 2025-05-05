import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import './index_tailwind.css';
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeComponent />
      </header>
    </div>
  );
}

export default App;
