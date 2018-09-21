import React, { Component } from "react";
import ReactDOM from "react-dom";

import Gallery from "./scenes/Gallery/ui-Gallery";
import Attract from "./scenes/Attract/ui-Attract";

import "./css/aspect-ratio.css";
import "./css/animations.css";
import "./css/styles.css";
import "./css/type-styles.css";

// Presidential data to be used for the Attract/Gallery (Attract can also be you're own design).
const data = require("./data/presidents.json");


class Application extends Component {
  state = {
    scene: "attract",
    timeout: 1000,
    presidents: []
  };

  componentDidMount() {
    let appElement = document.getElementById("app-element");

    window.onresize = event => {
      const { width, height } = this;

      appElement.style.width = width;
      appElement.style.height = height;
    };

    const { Presidents } = data;
    this.setState({ presidents: Presidents });
  }
  
  setScene = (scene) => {
    this.setState({scene});
  }

  render() {
    const { width, height } = this;

    const { scene, presidents } = this.state;
    const { timeout } = this.props;

    return (
      <div
        className="application"
        id="app-element"
        style={{ width: width, height: height }}
      >
        <div id="scenes">
          {scene === "attract" && <Attract
            mode={scene === "attract" ? "open" : "closed"}
            timeout={timeout}
            setScene={this.setScene}
            presidents={presidents}
          />}
          {scene === "gallery" && <Gallery
            mode={scene === "gallery" ? "open" : "closed"}
            timeout={timeout}
            setScene={this.setScene}
            presidents={presidents}
          />}
        </div>
      </div>
    );
  }

  get width() {
    return `${window.innerWidth}px`;
  }
  get height() {
    return `${window.innerHeight}px`;
  }
}

Application.defaultProps = {
  timeout: 1000
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
