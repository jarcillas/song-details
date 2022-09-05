import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div className="ui raised card">
        <div className="content">
          <div className="header">Song Details</div>
        </div>
        <div className="content">
          <div className="ui sub header">Title</div>
          <div className="description">{song.title}</div>
        </div>
        <div className="content">
          <div className="ui sub header">Duration</div>
          <div className="description">{song.duration}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui raised card">
        <div className="content">
          <div className="header">Select a song.</div>
        </div>
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
