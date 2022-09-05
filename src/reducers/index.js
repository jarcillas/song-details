import { combineReducers } from 'redux';

const songListReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '2:40' },
    { title: 'I Want it that Way', duration: '3:40' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songList: songListReducer,
  selectedSong: selectedSongReducer,
});
