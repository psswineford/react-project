import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Task1 from './components/Task1.js/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
            <Route exact path='/' element={<Task1 />} />
            <Route exact path='/task2' element={<Task2 />} />
            <Route exact path='/task3' element={<Task3 />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }


}

export default App;
