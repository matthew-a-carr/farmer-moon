import React, {useState} from 'react';
import QuantitySelector from '../QuantitySelector';
import { calculateCostOfTrip } from '../../lib/cornCalculations';

const CornTool = () => {
    const [ numberOfBags, setNumberOfBags ] = useState(0);

    const [ costOfTrip, setCostOfTrip ] = useState(0);

    const onChangeCornQuantity = (q) => {
        setNumberOfBags(q);
        setCostOfTrip(calculateCostOfTrip(q));
    }

    return (
        <>
            <h3>Bags of corn</h3>
            <QuantitySelector quantity={numberOfBags} onQuantityChange={onChangeCornQuantity} />
            <h3>Total cost of trips</h3>
            <p>{costOfTrip}p</p>
        </>
    );
}

export default CornTool;