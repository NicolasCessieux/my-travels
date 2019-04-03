import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <travel>
    <img className="photo" src={photo} alt={destination} />
    <div class="travelInfo">
      <h1>{destination}</h1>
      <h2>{country}</h2>
      <h3>{distance}</h3>
    </div>
  </travel>
);

export default Travel;