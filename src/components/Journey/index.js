import React from 'react';
import { emptyConst } from '../../lib/cornTripCalculator';

const Trip = ({ item, index }) => {
    const tripNumber = (index + 1);
    const instruction = item === emptyConst ? 'travel empty-pawed' : `travel with a ${item}`;
    return <p>{`Trip ${tripNumber} - ${instruction}`}</p>;
};

const Journey = ({ trips }) => {
    if (trips.length === 0) {
        return (
            <p>
                It’s not possible to transport this combination safely, try one of the combinations above.
            </p>
        );
    }

    return (
        <div>
            { trips.map((trip, index) => (
                <Trip item={trip} index={index} />
            ))}
        </div>
    );
};

export default Journey;