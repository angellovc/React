import { getHeroByIdAsync } from "../../bases/09-promises"
import heroes from "../../data/heroes";

describe('09-promises Tests', () => {
    test('getHeroByIdAsync async function test', (done) => {
        const id = 1;
        getHeroByIdAsync(id).then( hero => {
            expect(hero).toBe(heroes[0].name);
            done();
        });

    });
    test('getHeroByIdAsync must throw an error if the hero does not exists', (done) => {
        const id = 10;
        getHeroByIdAsync(id).catch(error => {
            expect(error).toBe('Hero Not Found');
            done();
        });
    });
})