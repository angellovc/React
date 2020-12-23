import { getArray } from "../../bases/07-destructuring-arrays";

describe('07-destructuring-arrays Tests', () => {
    test('getArray must return an array', () => {
        const [letters, numbers] = getArray();
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });
})
