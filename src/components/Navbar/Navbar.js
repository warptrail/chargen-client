import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
