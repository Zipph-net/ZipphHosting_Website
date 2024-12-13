import React from 'react'
import './Offerts.css';

function Offerts({ offertList }) {
    return (
        <div className="ofertas">
            <div className='offertsImage'></div>
            <article>
                <h2 className='offertTitle'>Ofertas</h2>
            </article>
            <div className="offert-list">
                {offertList}
            </div>
        </div>
    )
}

export default Offerts
