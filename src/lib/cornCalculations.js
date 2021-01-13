export const calculateCostOfTrip = (numberOfBags, costPerBag = 25) => {
    if (numberOfBags <= 0) {
        return costPerBag;
    }
    return numberOfBags * costPerBag;
};

export default {
    calculateCostOfTrip,
}