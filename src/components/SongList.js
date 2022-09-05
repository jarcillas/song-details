import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songList.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { selectSong })(SongList);
