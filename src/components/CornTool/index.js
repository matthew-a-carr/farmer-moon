import './styles.css';
import React, { useState } from 'react';
import QuantitySelector from '../QuantitySelector';
import { calculateCostOfJourney } from '../../lib/cornCalculations';
import { cornTripCalculator } from '../../lib/cornTripCalculator';
import Journey from '../Journey';

const formatPrice = (p) => {
    const pounds = Math.floor(p / 100);
    const pence = (p / 100 - pounds) * 100;

    return `£${pounds}.${pence === 0 ? '00' : pence}`
};

const CornTool = () => {
    const [numberOfBags, setNumberOfBags] = useState(0);
    const [numberOfGeese, setNumberOfGeese] = useState(0);

    const [costOfTrip, setCostOfTrip] = useState(calculateCostOfJourney(1));

    const [journey, setJourney] = useState(cornTripCalculator(0,0));

    const onChangeCornQuantity = (c) => {
        setNumberOfBags(c);
        const j = cornTripCalculator(c, numberOfGeese);
        setCostOfTrip(calculateCostOfJourney(j.length));
        setJourney(j);
    }

    const onChangeGeeseQuantity = (g) => {
        setNumberOfGeese(g);
        const j = cornTripCalculator(numberOfBags, g);
        setCostOfTrip(calculateCostOfJourney(j.length));
        setJourney(j);
    }

    const reset = () => {
        setNumberOfGeese(0);
        setNumberOfBags(0);
        const j = cornTripCalculator(0, 0);
        setCostOfTrip(calculateCostOfJourney(j.length));
        setJourney(j);
    }

    return (
        <div className="cornTool">
            <p>Only the following combinations are possile</p>
            <ul>
                <li>No geese, no corn</li>
                <li>No geese, all corn</li>
                <li>All geese, no corn</li>
                <li>1 goose, 1 corn</li>
                <li>1 goose, 2 corn</li>
                <li>2 geese, 1 corn</li>    
            </ul>
            <p>Enter the number of <strong>bags of corn</strong></p>
            <QuantitySelector quantity={numberOfBags} onQuantityChange={onChangeCornQuantity} />
            <p>Enter the number of <strong>geese</strong></p>
            <QuantitySelector quantity={numberOfGeese} onQuantityChange={onChangeGeeseQuantity} />

            <Journey trips={journey} />

            <div className="cornTools__totalCost">
                <h3>Total cost of trips</h3>
                <p>{formatPrice(costOfTrip)}</p>
            </div>

            <div className="cornTool__resetContainer">
                <button className="cornTool__reset" onClick={() => { reset() }}>Reset</button>
            </div>

        </div>
    );
}

export default CornTool;