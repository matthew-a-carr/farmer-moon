export const calculateCostOfTrip = (numberOfBags, costPerBag = 25) => {
    if (numberOfBags < 0) {
        return 0;
    }
    return numberOfBags * costPerBag;
};

export default {
    calculateCostOfTrip,
}