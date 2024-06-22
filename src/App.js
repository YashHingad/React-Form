// src/App.js
import React from 'react';
import DynamicForm from './DynamicForm';
import './App.css'; // Make sure this import is here

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Event Registration Form</h1>
        <DynamicForm />
      </div>
    </div>
  );
}

export default App;
