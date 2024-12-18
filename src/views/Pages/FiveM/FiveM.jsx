import React from 'react';
import NavBar from '../../../components/NavBar/NavBar'; 
import Footer from '../../../components/MainPage/Footer/Footer';
import './FiveM.css';

function FiveM() {
    return (
        <div>
            {/* Llamas a la NavBar aquí */}
            <NavBar />
            
            <div className='fivem-main'>
                <h1>Welcome to the FiveM Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default FiveM;