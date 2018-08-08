import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViedoList from '../video/viedoList'
import { getPopularVideos } from '../../actions';

class Sidebar extends Component {
  componentWillMount() {
    this.props.getPopularVideos();
  }

  render() {
    return (
      <ViedoList />
    );
  }
}
export default connect(null, {
  getPopularVideos
})(Sidebar);
