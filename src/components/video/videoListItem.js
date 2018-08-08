import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import styles from './style.less';
import classNames from 'classnames';

class VideoListItem extends Component {
  constructor() {
    super();
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check item video id with and current selected id and next selected id
    return (this.props.video.id.videoId === this.props.selected_video.id.videoId) ||
      (this.props.video.id.videoId === nextProps.selected_video.id.videoId);

  }

  handleVideoSelect() {
    this.props.onVideoSelect(this.props.video)
  }
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const isActive = this.props.selected_video.id.videoId === this.props.video.id.videoId ? 'isActive' : null;
    const liClasses = classNames('video-item', isActive);

    return (
      <li
        className={liClasses}
        onClick={this.handleVideoSelect}
      >
        <div className="video-item__left">
          <img src={imageUrl} />
        </div>
        <div className="video-item__right">
          {this.props.video.snippet.title}
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  selected_video_id: PropTypes.string,
  video: PropTypes.object.isRequired
};

VideoListItem.defaultProps = {
  selected_video_id: null
};

const mapStateToProps = ({ videos }) => {
  const { selected_video } = videos;
  return { selected_video };

};

export default connect(mapStateToProps)(VideoListItem);
