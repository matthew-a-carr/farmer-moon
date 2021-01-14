export const geeseConst = 'Geese';
export const cornConst = 'Corn';
export const emptyConst = 'Nothing';

export const cornTripCalculator = (numberOfBagsOfCorn, numberOfGeese) => {
    if (numberOfBagsOfCorn >= 1) {
        return calculateTripsForSingleItem(numberOfBagsOfCorn, cornConst);
    } else if (numberOfGeese >= 1) {
        return calculateTripsForSingleItem(numberOfGeese, geeseConst);
    }

    return [emptyConst];
}

const calculateTripsForSingleItem = (numberOfItems, typeOfItem) => {
    const trips = [];

    for (let i = 1; i <= numberOfItems; ++i) {
        trips.push(typeOfItem);

        if (i < numberOfItems) {
            trips.push(emptyConst);
        }
    }

    return trips;
}