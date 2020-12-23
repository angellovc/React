import { getHeroById, getHeroesByOwner } from "../../bases/08-import-export";
import heroes from "../../data/heroes";


describe('08-import-export Tests', () => {
    test('getHeroeById must return the hero', () => {
        const id = 1;
        const hero = getHeroById(id);
        const heroData = heroes.find(hero => hero.id === id);
        expect(hero).toEqual(heroData);
    })
    test('getHeroeById must return undefine if there is no hero related with the id', () => {
        const id = 10;
        const hero = getHeroById(id);
        expect(hero).toBe(undefined);
    })
    test('getHeroByOwner must return the heroes corresponding to the owner', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(hero => hero.owner === owner);
        expect(heroesByOwner).toEqual(heroesData);
    })
    test('getHeroByOwner must return a two positions array', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(hero => hero.owner === owner);
        expect(heroesByOwner.length).toBe(2);
    })
})