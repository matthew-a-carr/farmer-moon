import './styles.css';
import React, {useState} from 'react';
import ToolHeader from '../ToolHeader';
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
        <div className="cornTool">
            <ToolHeader title="Calculate the cost of a trip to market"/>
            <h3>Bags of corn</h3>
            <QuantitySelector quantity={numberOfBags} onQuantityChange={onChangeCornQuantity} />
            
            <div className="cornTools__totalCost">
                <h3>Total cost of trips</h3>
                <p>{costOfTrip}p</p>
            </div>
            

            <div className="cornTool__resetContainer">
                <button className="cornTool__reset" onClick={() => { onChangeCornQuantity(0)}}>Reset</button>
            </div>
        
        </div>
    );
}

export default CornTool;