export const calculateCostOfJourney = (numberOfBagsOfCorn, costPerBag = 25) => {
    if (numberOfBagsOfCorn <= 0) {
        return costPerBag;
    }
    return numberOfBagsOfCorn * costPerBag;
};

export default {
    calculateCostOfTrip: calculateCostOfJourney,
}