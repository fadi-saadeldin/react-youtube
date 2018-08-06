import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmbedResponsive from './embedResponsive';
import { Spinner } from '../common';


class VideoDetail extends Component {

  render() {
    if (!this.props.no_videos) {
      if (!this.props.selected_video) {
        return (
          <div className="col-md-8 body-height"> <Spinner loading={this.props.loading} /></div>
        )
      }

      const videoId = this.props.selected_video.id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;

      return (
        <div className="col-md-9 body-height">
          <Spinner loading={this.props.loading} />
          <EmbedResponsive url={url} />
          <div className="details">
            <div className="title">{this.props.selected_video.snippet.title}</div>
            <div>{this.props.selected_video.snippet.description}</div>
          </div>
        </div>
      )
    } else {
      return (<div className="col-md-9 body-height">No Results Found</div>)
    }
  }
}

const mapStateToProps = ({ videos }) => {
  const { videosList, selected_video, loading,no_videos } = videos;
  return { videosList, selected_video, loading,no_videos };
};
export default connect(mapStateToProps)(VideoDetail);