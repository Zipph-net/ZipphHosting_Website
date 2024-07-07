import React from 'react'
import './Offerts.css';

function Offerts({ offertList }) {
    return (
        <div className="ofertas">
            <article>
                <h2>Ofertas</h2>
            </article>
            <div className="offert-list">
                {offertList}
            </div>
        </div>
    )
}

export default Offerts
