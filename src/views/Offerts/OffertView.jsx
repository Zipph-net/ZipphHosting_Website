import React from "react";
import "./OffertView.css";
import Navbar from "../../components/NavBar/NavBar";

function OffertView({ offert }) {
  return (
    <div className="OffertView">
      <Navbar />
      <h1>{offert.name}</h1>
      <h2>{offert.description}</h2>
      <img src={offert.image} alt={offert.name + " image"} />
    </div>
  );
}

export default OffertView;
