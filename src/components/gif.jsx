import React, { Component } from 'react';

class Gif extends Component {
  handleUpdate2 = (event) => {
    console.log();
    if (typeof this.props.updateFunction != "undefined") {
      this.props.updateFunction(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="test" className="gif" onClick={this.handleUpdate2} />
    );
  }
}

export default Gif;
