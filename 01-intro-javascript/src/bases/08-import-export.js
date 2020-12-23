// import heroes from './data/heroes';
import heroes from "../data/heroes";

// console.log(owner);
// console.log(heroes);


const getHeroById = (id) => heroes.find( (hero) => hero.id === id);
// console.log(getHeroeById(2));


const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));

export {
  getHeroById,
  getHeroesByOwner
}