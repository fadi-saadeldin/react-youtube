import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchVideo, searchTextChanged } from '../../actions';
import { InputButton,InputGroup } from '../common';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.onKeyPress=this.onKeyPress.bind(this);

  }
  // handle on change seach text
  textChange(event) {
    this.props.searchTextChanged(event.target.value);
  }
  // handle on search button press
  handleChange() {
    this.props.searchVideo(this.props.searchText);
  }
   // handle on search enter press
  onKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.props.searchVideo(this.props.searchText);
    }
}

  render() {
    return (
      <div className="col-md-8">
        <div className="searchbar-inner">
          <InputGroup
            placeholder="Search"
            name="search"
            onChange={this.textChange}
            value={this.props.searchText}
            onKeyPress={this.onKeyPress}
          />
          <InputButton
            value=""
            onClick={this.handleChange}
            iconClass="fas fa-search"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ videos }) => {
  const { searchText } = videos;
  return { searchText };
};

export default connect(mapStateToProps, {
  searchTextChanged, searchVideo
})(SearchBar);