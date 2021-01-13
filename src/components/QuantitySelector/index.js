import './styles.css';
import React from 'react';
import arrow from './arrow.svg';
import arrowUp from './arrow-up.svg';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const onDown = () => {
        onQuantityChange(quantity - 1);
    }

    const onUp = () => {
        onQuantityChange(quantity + 1);
    }

    return (
        <div className="quantitySelector">
            <button disabled={quantity <= 0} className="quantitySelector__button" onClick={onDown}><img src={arrow}/></button>
            <p className="quantitySelector__value">{quantity}</p>
            <button className="quantitySelector__button" onClick={onUp}><img src={arrowUp}/></button>
        </div>
    )
}

export default QuantitySelector;