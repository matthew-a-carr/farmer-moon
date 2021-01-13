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
            <QuantitySelector quantity={numberOfBags} onQuantityChange={onChangeCornQuantity} />
            <p>{costOfTrip}</p>
        </>
    );
}

export default CornTool;