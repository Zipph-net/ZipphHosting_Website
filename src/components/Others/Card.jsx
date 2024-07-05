import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, description, image }) {
  // Construye la URL basada en el nombre del plan
  const path = `/${title.toLowerCase()}`; // Asegúrate de que el nombre del plan sea consistente en términos de formato y espacios

  // Reemplaza "\n" con elementos <br> para manejar saltos de línea
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <Link to={path} className="Card">
      <div className="card-content">
        <h1 className="titulo_card">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="description_card"></p>
      </div>
    </Link>
  );
}

export default Card;