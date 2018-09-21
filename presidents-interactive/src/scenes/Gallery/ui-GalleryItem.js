import React from "react";

const getAngle = (amount = 10) => Math.random() * amount - 5;

export const GalleryItem = props => {
  const { portrait, showDetail, id } = props;

  return (
    <div
      onClick={() => showDetail(id)}
      className="gallery-thumbnail"
      style={{ transform: `rotate(${getAngle()}deg)` }}
    >
      <div className="aspect-ratio-box gallery-thumbnail-image">
        <img className="aspect-ratio-box-item" src={portrait} />
      </div>
    </div>
  );
};

export const GalleryItemDetail = ({
  name,
  portrait,
  terms,
  party,
  vice_president,
  biography
}) => (
  <section className="gallery-item">
    <div className="col">
      <h2 className="inset light">{name}</h2>
    </div>
    <div className="col">
      <div className="details" style={{ transform: `rotate(-2deg)` }}>
        <div className="aspect-ratio-box gallery-item-image">
          <img className="aspect-ratio-box-item" src={portrait} />
        </div>

        <ul>
          <li className="inset light">
            <b> Terms: </b>
            {terms.join("-")}
          </li>
          <li className="inset light">
            <b> Party: </b>
            {party}
          </li>
          <li className="inset light">
            <b> Vice President{vice_president.length > 1 && "s"}: </b>{" "}
            {vice_president.join(", ")}
          </li>
        </ul>
      </div>
      <div className="details">
        <p style={{ transform: `rotate(2deg)` }}>{biography}</p>
      </div>
    </div>
  </section>
);
