/* Destructuring arrays */

const characters = ['Goku', 'Vegeta', 'Trunks'];

const [person, person2] = characters;
console.log(person, person2);
const [, , person3] = characters;
console.log(person3);

const getArray = () => ['ABC', 123];
const [letters, numbers] = getArray();
console.log(letters, numbers);

const usState = (value) => {
  return [value, (name) => console.log(`Hello ${name}`)];
}
const [name, sayHi] = usState('Goku');
console.log(name);
sayHi(name);