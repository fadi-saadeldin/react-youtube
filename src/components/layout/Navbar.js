import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchBar from '../searchBar';
import SearchBar from '../searchBar';
// import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="row">
            <Link className="navbar-brand col-md-3" to="/">
              React Youtube
          </Link>
            <SearchBar />

          </div>
        </div>
      </nav>
    );
  }
}





export default Navbar;
