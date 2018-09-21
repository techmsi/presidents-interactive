import "./gallery.css";

import React, { Component } from "react";
import { Transition } from "react-transition-group";

import {GalleryItem, GalleryItemDetail} from "./ui-GalleryItem";
import Loader from "../Loader/ui-loader";
import Modal from '../Modal/ui-Modal';

export default class Gallery extends Component {
  state = {
    current: 1,
    show: false
  }
  onEntering = () => {};
  onEntered = () => {};
  onExited = () => {};
  onExiting = () => {};

  MAX_INACTIVITY = 60000;

  componentDidMount() {
    const { setScene } = this.props;

    this.switchToAttract = setInterval(() => {
      setScene("attract");
    }, this.MAX_INACTIVITY);
  }

  componentWillUnmount() {
    clearInterval(this.switchToAttract);
  }

  showModal = (id) => {
    console.log('Id', id);
    this.setState({ show: true, current: id });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render() {
    const { current, show} = this.state;
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
        <div className={`gallery scene ${mode}`}>
          <h1 className="inset light"> Here are the Presidents </h1>
          <Modal show={show} handleClose={this.hideModal}>
            <GalleryItemDetail {...presidents[current]} />
          </Modal>

           <div className="gallery-list">
           {presidents.length ?
             presidents.map((o, i) =>
               <GalleryItem
                 key={`president-${i}`}
                 id={i}
                 showDetail={this.showModal}
                 {...o}
               />)
             :
             <Loader />
           }
           </div>
            
        </div>
      </Transition>
    );
  }
}

Gallery.defaultProps = {
  mode: "closed"
};
