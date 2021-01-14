import './styles.css';
import React, { useState } from 'react';
import ToolHeader from '../ToolHeader';
import QuantitySelector from '../QuantitySelector';
import { calculateCostOfJourney } from '../../lib/cornCalculations';

const formatPrice = (p) => {
    const pounds = Math.floor(p / 100);
    const pence = (p / 100 - pounds) * 100;

    return `£${pounds}.${pence === 0 ? '00' : pence}`
};

const CornTool = () => {
    const [numberOfBags, setNumberOfBags] = useState(0);

    const [costOfTrip, setCostOfTrip] = useState(calculateCostOfJourney(0));

    const onChangeCornQuantity = (q) => {
        setNumberOfBags(q);
        setCostOfTrip(calculateCostOfJourney(q));
    }

    return (
        <div className="cornTool">
            <ToolHeader title="Calculate the cost of taking corn to market" />
            <h3>Bags of corn</h3>
            <QuantitySelector quantity={numberOfBags} onQuantityChange={onChangeCornQuantity} />

            <div className="cornTools__totalCost">
                <h3>Total cost of trips</h3>
                <p>{formatPrice(costOfTrip)}</p>
            </div>


            <div className="cornTool__resetContainer">
                <button className="cornTool__reset" onClick={() => { onChangeCornQuantity(0) }}>Reset</button>
            </div>

        </div>
    );
}

export default CornTool;