/* promises */

import {getHeroById} from './08-import-export';

// const promise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    const heroe = getHeroeById(9);
//    if (heroe != undefined) {
//      resolve(heroe.name);
//    } else {
//      reject('Hero not found');
//    }
//  }); 
// });

// promise.then((name) => {
//   console.log(name);
// }).catch(err => console.log(err));

export const getHeroByIdAsync = (id) => new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero.name);
      } else {
        reject('Hero Not Found');
      }
    }, 1500)
  }
)
// .then(console.log)
// .catch(console.warn);

// getHeroByIdAsync(1);
// console.log(1);
// getHeroByIdAsync(2);
// console.log(2);
// getHeroByIdAsync(19);
// console.log(3);
