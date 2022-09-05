import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {song.title}
          <br />
          Duration: {song.duration}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Select a song.</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
