export const calculateCostOfJourney = (numberOfTrips, costPerTrip = 25) => {
    if (numberOfTrips <= 0) {
        return 0;
    }
    return numberOfTrips * costPerTrip;
};

export default {
    calculateCostOfTrip: calculateCostOfJourney,
}