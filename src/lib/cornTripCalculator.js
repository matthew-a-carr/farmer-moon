export const geeseConst = 'Geese';
export const cornConst = 'Corn';
export const emptyConst = 'Nothing';

export const cornTripCalculator = (numberOfBagsOfCorn, numberOfGeese) => {
    if (numberOfGeese === 0 && numberOfBagsOfCorn === 0) {
        return [emptyConst];
    }

    if (numberOfBagsOfCorn >= 1 && numberOfGeese === 0) {
        return calculateTripsForSingleItem(numberOfBagsOfCorn, cornConst);
    } 
    
    if (numberOfGeese >= 1 && numberOfBagsOfCorn === 0) {
        return calculateTripsForSingleItem(numberOfGeese, geeseConst);
    }

    if (numberOfBagsOfCorn === 1 && numberOfGeese === 1) {
        return [
            geeseConst,
            emptyConst,
            cornConst,
        ];
    }

    if (numberOfBagsOfCorn === 2 && numberOfGeese === 1) {
        return [
            geeseConst,
            emptyConst,
            cornConst,
            geeseConst,
            cornConst,
            emptyConst,
            geeseConst,
        ];
    }

    if (numberOfBagsOfCorn === 1 && numberOfGeese === 2) {
        return [
            cornConst, 
            emptyConst, 
            geeseConst, 
            cornConst, 
            geeseConst, 
            emptyConst, 
            cornConst,
        ];
    }

    return [];
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