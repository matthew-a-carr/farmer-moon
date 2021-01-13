import React, {useState} from 'react';
import QuantitySelector from '../QuantitySelector';

const CornTool = () => {
    const [ numberOfBags, setNumberOfBags ] = useState(2);

    return (
        <>
            <QuantitySelector quantity={numberOfBags} onQuantityChange={setNumberOfBags} />
        </>
    );
}

export default CornTool;