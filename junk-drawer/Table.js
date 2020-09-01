import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
  getKeys = () => {
    return Object.keys(this.props.data[0]);
  };

  getHeader = () => {
    const keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  getRowsData = () => {
    const items = this.props.data;
    const keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="table-box">
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={index}>{props.data[key]}</td>;
  });
};
