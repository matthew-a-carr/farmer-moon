export const geeseConst = 'Geese';
export const cornConst = 'Corn';
export const emptyConst = 'Nothing';

export const cornTripCalculator = (numberOfBagsOfCorn, numberOfGeese) => {
    if (numberOfBagsOfCorn == 1) {
        return [cornConst];
    } else if (numberOfBagsOfCorn > 1) {
        const trips = [];

        for (let i = 1; i <= numberOfBagsOfCorn; ++i) {
            trips.push(cornConst);

            if (i < numberOfBagsOfCorn) {
                trips.push(emptyConst);
            }
        }

        return trips;
    }

    return [emptyConst];
}