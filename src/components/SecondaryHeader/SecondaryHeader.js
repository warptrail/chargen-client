import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SecondaryHeader.css';

class SecondaryHeader extends Component {
  static defaultProps = {
    page: ''
  };

  render() {
    const { page } = this.props;

    return (
      <ul className="control_menu">
        {page === 'roster' ? (
          <li>
            <Link to="/create">New Character</Link>
          </li>
        ) : (
          <li>
            <Link to="/roster">Roster</Link>
          </li>
        )}
      </ul>
    );
  }
}

SecondaryHeader.propTypes = {
  page: PropTypes.string
};

export default SecondaryHeader;
