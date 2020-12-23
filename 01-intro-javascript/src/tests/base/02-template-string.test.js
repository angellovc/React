import '@testing-library/jest-dom';
import { sayHi } from "../../bases/02-template-string";

describe('02-template-string Tests', () => {

    test('sayHi test. It must return Hi Angello', () => {
        const name = 'Angello';
        const hi = sayHi(name);
        expect(hi).toBe('Hi Angello');
    });

    test('sayHi must return Hi Angello if there no arguments passed throught', () => {
        const hi = sayHi();
        expect(hi).toBe('Hi Angello');
    });

})