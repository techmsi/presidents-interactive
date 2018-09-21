import "./attract.css";

import React, { Component } from "react";

import { Transition } from "react-transition-group";

import RotatingCube from '../RotatingCube/ui-RotatingCube';
import AttractItem from './ui-AttractItem';
import Loader from '../Loader/ui-loader';

export default class Attract extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onEntering = () =>{}
  onEntered = () => {}
  onExited = () => {}
  onExiting =() => {}

  render() {
    const { mode, timeout, setScene, presidents } = this.props;

    return (
      <Transition
        mountOnEnter={true}
        timeout={timeout}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExiting={this.onExiting}
        onExited={this.onExited}
        in={mode === "open" ? true : false}
      >
      {status => 
        <div className={`attract scene ${mode} ${status}`}>
          <h1 className="inset light"> America's First Presidents</h1>
          <div className={`page-center`}>
          {presidents.length ? 
              <RotatingCube
                faces={presidents}
                Face={AttractItem}
                onClick={() => setScene('gallery')} />:
             <Loader />
          }
          </div>
        </div>
      }
      </Transition>
    );
  }
}

Attract.defaultProps = {
  mode: "open"
};
