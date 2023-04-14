import React, { Component } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Users from './components/users';
import NavBar from './components/Navbar';
import SingleUser from './components/SingleUser';

class App extends Component {

render() {
    return (
     <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<SingleUser />} />
      </Routes>
     </div>
      );    
  }
}


export default App;
