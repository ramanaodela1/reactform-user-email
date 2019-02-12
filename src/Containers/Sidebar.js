import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div>
          <ul>
            <li>
              <Link to="/home">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul> 
      </div>
    );
  }
}