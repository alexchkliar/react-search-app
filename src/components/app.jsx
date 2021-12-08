import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "YzNkhYFAUgVK6UuK6Z"
    };
  }

  search = (query) => {
    giphy('Rnr92kbYxwUVFdvhceQzDgV9GdEfIEqI').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  changeSelectedGif = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFunction={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
