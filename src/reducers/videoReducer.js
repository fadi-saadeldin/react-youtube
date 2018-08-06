
import {
  SEARCH_VIDEO_RESULTS,
  SELECT_VIDEO,
  SPINNER_LOADING,
  SEARCH_TEXT_CHANGED,
  NO_RESULTS
} from '../actions/types';

const initialState = {
  videosList: [],
  loading: false,
  selected_video: "",
  searchText: "",
  no_videos:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return {
        ...state,
        searchText: action.payload
      };
      case SPINNER_LOADING:
      return {
        ...state,
        loading: true
      };
    case NO_RESULTS:
      return {
        ...state,
        no_videos: true,
        videosList:[]
      };
    case SEARCH_VIDEO_RESULTS:
      return {
        ...state,
        loading: false,
        no_videos:false,
        videosList: action.payload
      };
    case SELECT_VIDEO:
      return {
        ...state,
        selected_video: action.payload
      };

    default:
      return state;
  }
}

