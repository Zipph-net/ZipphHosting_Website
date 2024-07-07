import React from "react";
import "./CardOfferts.css";
import { Link } from "react-router-dom";

function CardOfferts({ title, description, price }) {
  // Construye la URL basada en el nombre del plan
  const path = `/${title.toLowerCase()}`; // Asegúrate de que el nombre del plan sea consistente en términos de formato y espacios

  // Reemplaza "\n" con elementos <br> para manejar saltos de línea
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <Link to={path} className="CardOfferts">
      <div className="CardOfferts-content">
        <h1 className="titulo_CardOfferts">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="description_CardOfferts"></p>
        <div className="price">
          <h2 className="priceTitle">${price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CardOfferts;