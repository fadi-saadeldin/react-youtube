import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from './videoListItem';
import { selectVideo } from '../../actions';

class VideoList extends Component {
  constructor (props) {
    super(props);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  handleVideoSelect(video) {
    this.props.selectVideo(video);
  }

  render() {

    const videoItems = this.props.videosList.map((video) => {
      return (
        <VideoListItem
            key={video.id.videoId}
            onVideoSelect={this.handleVideoSelect}
            video={video}
        />
      );
    });

    return (
        <ul className="col-md-3 list scroll-list">
        {videoItems}
        </ul>
    );
 }
}

const mapStateToProps = ({ videos }) => {
    const { videosList } = videos;
    return { videosList };
  
  };
  export default connect(mapStateToProps, {
    selectVideo
  })(VideoList);

