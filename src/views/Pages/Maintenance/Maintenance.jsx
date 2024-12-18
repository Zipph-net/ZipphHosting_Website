import React from 'react';
import NavBar from '../../../components/NavBar/NavBar'; 
import Footer from '../../../components/MainPage/Footer/Footer';
import './Maintenance.css'; // Asegúrate de importar el archivo CSS

function Maintenance() {
    return (
        <div>
            <NavBar />
            <div className="maintenance-container">
                <div className="maintenance-content">
                    <img 
                        src="https://i.imgur.com/QOL11hO.jpeg" 
                        alt="Mantenimiento"
                        className="maintenance-image"
                    />
                    <div className="maintenance-text">
                        <h1>Estamos en Mantenimiento</h1>
                        <p>Estamos trabajando para mejorar nuestro servicio. Vuelve pronto para ver las actualizaciones.</p>
                        <div className="maintenance-footer">
                            <p>Gracias por tu paciencia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Maintenance;