import React from "react";
import "./CardOfferts.css";
import { Link } from "react-router-dom";
import { FaCog } from 'react-icons/fa';

function CardOfferts({ title, description, price, priceNormal }) {
  // Construye la URL basada en el nombre del plan
  const path = `/${title.toLowerCase()}`; // Asegúrate de que el nombre del plan sea consistente en términos de formato y espacios

  // Reemplaza "\n" con elementos <br> para manejar saltos de línea
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <div className="CardOfferts">
      <div className="CardOffertBox">
        <div className="CardOfferts-content">
          <h1 className="titulo_CardOfferts">{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="description_CardOfferts"></p>
        </div>
        <div className="priceOffert">
          <h2 className="priceTitleOffert">€ {price}</h2>
          <h2 className="priceTitleNormalOffert">{priceNormal}</h2>
        </div>
        <div className="CardInfoOffert">
        <Link to={path} className="CardMoreOffert">
          <FaCog style={{ verticalAlign: 'middle', marginRight: '5px' }} />
          <p style={{ display: 'inline-block' }}>Configure</p>
        </Link>
        </div>
      </div>
    </div>
        
      
  );
}

export default CardOfferts;