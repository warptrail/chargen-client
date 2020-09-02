import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1>CharGen</h1>
      </Link>

      <h2>Fantasy Character Generator</h2>
      <Navbar />
    </header>
  );
}
