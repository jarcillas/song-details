import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  renderList() {
    return this.props.songList.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Song List</h1>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
    songList: state.songList,
  };
};

export default connect(mapStateToProps)(SongList);
