import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import VideoDetails from '../video/videoDetails';

class Main extends Component {
  render() {
    return (
      <VideoDetails />
    );
  }
}

export default Main;