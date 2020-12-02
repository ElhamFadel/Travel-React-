import React from "react";
import Rodal from "rodal";
import PlayImage from "../../assets/img/play.png";
import ReactPlayer from "react-player";

// include styles
import "rodal/lib/rodal.css";

export default class Real extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        {/* <button>show</button> */}
        <img onClick={this.show.bind(this)} src={PlayImage} alt="playImage" />
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
          <ReactPlayer
            url="http://www.youtube.com/watch?v=0O2aH4XLbto"
            width="100%"
            height="100%"
            style={{
              margin: "0 auto",
            }}
          />
        </Rodal>
      </div>
    );
  }
}
