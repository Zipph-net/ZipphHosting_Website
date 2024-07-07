import React from "react";
import "./CardPlans.css";
import { Link } from "react-router-dom";

function CardPlans({ title, description }) {
  // Construye la URL basada en el nombre del plan
  const path = `/${title.toLowerCase()}`; // Asegúrate de que el nombre del plan sea consistente en términos de formato y espacios

  // Reemplaza "\n" con elementos <br> para manejar saltos de línea
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <Link to={path} className="CardPlans">
      <div className="CardPlans-content">
        <h1 className="titulo_CardPlans">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="description_CardPlans"></p>
      </div>
    </Link>
  );
}

export default CardPlans;