import React from 'react';
import "./rotate-cube.css";



const RotatingCube = ({ Face, faces, onClick }) => {

  return (
    <div className="wrap" onClick={onClick}>
      <div className="cube">
        <Face side="front" {...faces[0]} />
        <Face side="back" {...faces[1]}/>
        <Face side="top" />
        <Face side="bottom" />
        <Face side="left" {...faces[2]}/>
        <Face side="right" {...faces[3]}/>
      </div>
    </div>
  )
}

export default RotatingCube;