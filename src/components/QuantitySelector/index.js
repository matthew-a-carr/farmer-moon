import React from 'react';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const onDown = () => {
        onQuantityChange(quantity - 1);
    }

    const onUp = () => {
        onQuantityChange(quantity + 1);
    }

    return (
        <>
            <button onClick={onDown}>down</button>
            <p>{quantity}</p>
            <button onClick={onUp}>up</button>
        </>
    )
}

export default QuantitySelector;