import React, { Component } from 'react';
import Gif from "./gif";

class GifList extends Component {

  handleUpdate2 = (event) => {
    // this.props.updateFunction(event.target);
    this.props.updateFunction(this.props.id);
    console.log(123);
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} updateFunction={this.props.updateFunction} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
