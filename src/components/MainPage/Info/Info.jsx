import React from 'react';
import './Info.css';

function Info() {
    return (
        <div className="info-container">
            <div className="info1">
                <h2 className='TitleInfo1'>SERVIDORES DE ALTA EFICIENCIA</h2>
                <p className='DescInfo1'>Estamos comprometidos en brindar el mejor servicio, al mejor precio posible. Somos el proveedor #1 de Minecraft Hosting en Español.</p>
            </div>
            <div className="info2">
                <div className='Container1'>
                    <h2 className='TextContainer1'>
                    Support 24/7 with proffesionals
                    </h2>
                    </div>
                <div className='Container2'>
                    <h2 className='TextContainer2'>
                    99.98% Up-Time
                    </h2>
                    </div>
                <div className='Container3'>
                    <h2 className='TextContainer3'>
                    The best connection
                    </h2>
                    </div>
            </div>
        </div>
    );
}

export default Info;