import { calculateCostOfTrip } from './cornCalculations';

describe('The `calculateCostOfTrip` fuction', () => {
    it('returns 25 cost for 0 bags', () => {
        expect(calculateCostOfTrip(0)).toBe(25);
    });

    it('returns 250p cost for 10 bags at 25p per bag', () => {
        expect(calculateCostOfTrip(10, 25)).toBe(250);
    });

    it('returns 0 cost for -10 bags at 30p per bag', () => {
        expect(calculateCostOfTrip(-10, 30)).toBe(30);
    });
});