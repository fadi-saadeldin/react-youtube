import axios from 'axios';

import {
  SEARCH_VIDEO_RESULTS,
  SELECT_VIDEO,
  SEARCH_TEXT_CHANGED,
  SPINNER_LOADING,
  NO_RESULTS
} from './types';

const API_KEY = 'AIzaSyDSwptLhbP92risoSHLYlKa_N0S__Uj8gA';
let API_URL = 'https://www.googleapis.com/youtube/v3';
// Search Video
const params = {
  key: API_KEY,
};

// search text change
export const searchTextChanged = (text) => {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: text
  };
};

// Search Video 
export const searchVideo = (term, limit = 10, config = null) =>
  dispatch => {
    dispatch({ type: SPINNER_LOADING });
    axios.get(API_URL + '/search', {
      ...config,
      params: {
        ...params,
        part: 'snippet',
        q: term,
        type: 'video',
        maxResults: limit,
      }
    })
      .then(res => {
        if (res.data.items[0]) {
          dispatch(selectVideo(res.data.items[0]));
          searchVidosSuccess(dispatch, res.data.items);
        }else{
          noResults(dispatch);
        }
        
      })
      .catch(err =>console.log(err)
      );
  };

// Get Most popular videos
export const getPopularVideos = (limit = 10, config = null) =>
  dispatch => {
    dispatch({ type: SPINNER_LOADING });
    axios.get(API_URL + '/search', {
      ...config,
      params: {
        ...params,
        part: 'snippet',
        chart: "mostPopular",
        regionCode: "US",
        type: 'video',
        maxResults: limit,
      }
    })
      .then(res => {
        if (res.data.items[0]) {
          dispatch(selectVideo(res.data.items[0]));
        }
        searchVidosSuccess(dispatch, res.data.items);
      })
      .catch(err =>
        dispatch({
          type: SEARCH_VIDEO_RESULTS,
          payload: {}
        })
      );
  };

// search videos results dispatch
const searchVidosSuccess = (dispatch, data) => {
  dispatch({ type: SEARCH_VIDEO_RESULTS, payload: data })
}

// no results dispatch
const noResults= (dispatch) => {
  dispatch({ type: NO_RESULTS, payload: true })
}
// select  video  dispatch
export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
}






