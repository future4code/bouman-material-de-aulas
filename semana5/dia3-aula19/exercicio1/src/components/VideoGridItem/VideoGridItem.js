import React from "react";
import "./VideoGridItem.css";

class VideoGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <article>
        <img alt="Thumbnail" src={this.props.imagem}></img>
        <p>
          <b>{this.props.texto}</b>
        </p>
      </article>
    );
  };
}

export default VideoGridItem;
