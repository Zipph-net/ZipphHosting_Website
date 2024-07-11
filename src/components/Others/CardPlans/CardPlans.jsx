import React from "react";
import "./CardPlans.css";
import { Link } from "react-router-dom";
import { FaCog } from 'react-icons/fa';

function CardPlans({ title, description, image, price }) {
  // Construye la URL basada en el nombre del plan
  const path = `/${title.toLowerCase()}`; // Asegúrate de que el nombre del plan sea consistente en términos de formato y espacios

  // Reemplaza "\n" con elementos <br> para manejar saltos de línea
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <div className="CardPlans">
      <div className="CardPlanBox">
        <div className="CardPlans-content">
          <h1 className="titulo_CardPlans">{title}</h1>
          <img src={image} alt={title} className="imagePlan" /> {/* Mostrar la imagen usando <img> */}
          <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="description_CardPlans"></p>
        </div>
        <div className="pricePlans">
          <h2 className="priceTitlePlans">€ {price}</h2>
        </div>
        <div className="CardInfoPlans">
          <Link to={path} className="CardMorePlans">
            <FaCog style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            <p style={{ display: 'inline-block' }}>Configure</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardPlans;