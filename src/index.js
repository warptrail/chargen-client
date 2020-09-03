import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RosterProvider } from './contexts/RosterContext';
import { CharacterProvider } from './contexts/CharacterContext';
import 'typeface-roboto';
import './index.css';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
    <RosterProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </RosterProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
