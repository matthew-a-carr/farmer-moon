import { calculateCostOfJourney } from './cornCalculations';

describe('The `calculateCostOfTrip` fuction', () => {
    it('returns 0 cost for 0 trips', () => {
        expect(calculateCostOfJourney(0)).toBe(0);
    });

    it('returns 250p cost for 10 trips at 25p per trip', () => {
        expect(calculateCostOfJourney(10, 25)).toBe(250);
    });

    it('returns 0 cost for -10 trips at 30p per trip', () => {
        expect(calculateCostOfJourney(-10, 30)).toBe(0);
    });
});