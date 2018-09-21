import React from "react";

const AttractItem = ({ side, name = null, portrait = null, terms }) => {
  const NameDisplay = ({ name }) => {
    if (name) {
      const [first, middle = null, last] = name.split(' ');
      return last ? <h2 className="inset dark">{first} {middle[0]}. {last}</h2> : 
      <h2 className="inset dark">{name}</h2>
    } else {
      return null;
    }
  }

  return (
    <div className={side}>
      {portrait && <img className="aspect-ratio-box-item" src={portrait} />}
      {name &&
        <span className="cube-text">
          <NameDisplay name={name} />
          <span className="inset">{terms.join('-')}</span>
        </span>}
    </div>
  )
}
export default AttractItem;