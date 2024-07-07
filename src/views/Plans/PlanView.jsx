import React from "react";
import "./PlanView.css";
import Navbar from "../../components/NavBar/NavBar";

function PlanView({ plan }) {
  return (
    <div className="PlanView">
      <Navbar />
      <h1>{plan.name}</h1>
      <h2>{plan.description}</h2>
      <img src={plan.image} alt={plan.name + " image"} />
    </div>
  );
}

export default PlanView;
