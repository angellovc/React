/* promises */

import {getHeroeById} from './bases/08-import-export';

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

const getHeroByIdAsync = (id) => new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);
      if (hero) {
        resolve(hero.name);
      } else {
        reject('Hero Not Found');
      }
    }, 3000)
  }
)
.then(console.log)
.catch(console.warn);

getHeroByIdAsync(1);
console.log(1);
getHeroByIdAsync(2);
console.log(2);
getHeroByIdAsync(19);
console.log(3);
