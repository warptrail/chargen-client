import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header(props) {
  return (
    <header>
      <h1>CharGen</h1>
      <h2>Fantasy Character Generator</h2>
      <Navbar />
    </header>
  );
}
