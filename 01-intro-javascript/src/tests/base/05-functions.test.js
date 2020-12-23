import '@testing-library/jest-dom';
import { getUser, getUserActive } from "../../bases/05-functions";

describe('05-functions Tests', () => {
    test('getUser Must return an object', () => {
        const userTest = {
            id: 'ABC123',
            name: 'anyName'
        }
        const user = getUser();
        /*
        toBe function is used to test two variables that use the same
        memory allocation as if literal string or also numbers or references
        to the same object. If you need to test whether two objects have the
        same content, you must use toStrictEqual which don't search into the
        same memory allocation, but compare the objects attributes and his values
        */
        expect(user).toStrictEqual(userTest);
    });

    test('getUserActive must return an object', () => {
        const username = 'Angello';
        const userTest = {
            id: '1123',
            name: username
        }
        const userActive = getUserActive(username);
        expect(userActive).toStrictEqual(userTest);
    })

})