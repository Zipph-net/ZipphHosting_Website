import React from 'react';
import NavBar from '../../../components/NavBar/NavBar'; 
import Footer from '../../../components/MainPage/Footer/Footer';
import './Minecraft.css';

function Minecraft() {
    return (
        <div>
            {/* Llamas a la NavBar aquí */}
            <NavBar />
            
            <div className='minecraft-main'>
                <h1>Welcome to the Minecraft Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Minecraft;