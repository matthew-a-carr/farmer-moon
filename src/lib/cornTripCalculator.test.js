import { cornTripCalculator, emptyConst, cornConst, geeseConst } from './cornTripCalculator';

describe('The `cornTripCalculator` function', () => {
    const confirmTripSteps = (trips, ...steps) => {
        for (let i = 0; i < trips.length; ++i) {
            const trip = trips[i];
            const expectedStep = steps[i];
            expect(trip).toBe(expectedStep);
        }
    }

    describe('handles trips with no geese or corn', () => {
        it('should return 1 trip if you take 0 geese and 0 corn', () => {
            const trips = cornTripCalculator(0, 0);
            expect(trips.length).toBe(1);
            confirmTripSteps(trips, emptyConst);
        });
    });
    
    describe('handles trips with only corn', () => {
        it('should return 1 trip if you take 0 geese and 1 corn', () => {
            const trips = cornTripCalculator(1, 0);
            expect(trips.length).toBe(1);
            confirmTripSteps(trips, cornConst);
        });

        it('should return 3 trips if you take 0 geese and 2 corn', () => {
            const trips = cornTripCalculator(2, 0);
            expect(trips.length).toBe(3);
            confirmTripSteps(trips, cornConst, emptyConst, cornConst);
        });

        it('should return return 5 trips if you take 0 geese and 3 corn', () => {
            const trips = cornTripCalculator(3, 0);
            expect(trips.length).toBe(5);
            confirmTripSteps(trips, cornConst, emptyConst, cornConst, emptyConst, cornConst);
        });

        it('should return 139 trips if you take 0 geese and 70 corn', () => {
            const trips = cornTripCalculator(70, 0);
            expect(trips.length).toBe(139);
        });
    });

    describe('handles trips with only geese', () => {
        it('should return 3 trips if you take 2 geese and 0 corn', () => {
            const trips = cornTripCalculator(0, 2);
            expect(trips.length).toBe(3);
            confirmTripSteps(trips, geeseConst, emptyConst, geeseConst);
        });

        it('should return 139 trips if you take 70 geese and 0 corn', () => {
            const trips = cornTripCalculator(0, 70);
            expect(trips.length).toBe(139);
        });
    });

    describe('handles trips with a single bag of corn and a single goose', () => {
        it('should return 3 trips', () => {
            const trips = cornTripCalculator(1, 1);
            expect(trips.length).toBe(3);
            confirmTripSteps(trips, geeseConst, emptyConst, cornConst);
        });
    });

    describe('handles trips with two of one item and one of the other', () => {
        it('should return 7 trips for 1 goose and 2 bags of corn', () => {
            const trips = cornTripCalculator(2, 1);
            expect(trips.length).toBe(7);
            confirmTripSteps(trips, geeseConst, emptyConst, cornConst, geeseConst, cornConst, emptyConst, geeseConst);
        });

        it('should return 7 trips for 2 geece and 1 bag of corn', () => {
            const trips = cornTripCalculator(1, 2);
            expect(trips.length).toBe(7);
            confirmTripSteps(trips, cornConst, emptyConst, geeseConst, cornConst, geeseConst, emptyConst, cornConst);
        });
    });

    describe('handles combinations that are not possible', () => {
        it('should return no trips for 2 geece and 2 bags of corn', () => {
            const trips = cornTripCalculator(2, 2);
            expect(trips.length).toBe(0);
        })
    })
});