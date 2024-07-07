import React from 'react';
import './Products.css';

function Products({ planList }) {
    return (
        <div className="products">
            <article>
                <h2>Plans</h2>
            </article>
            <div className="plan-list">
                {planList}
            </div>
        </div>
    );
}

export default Products;