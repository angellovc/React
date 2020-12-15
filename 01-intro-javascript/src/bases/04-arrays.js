/* it is not recomendable to use push to add an item
const array = [];
array.push(1); 
should not be used, because it modified
the main object creating a new array instantiation and
then adding the new number
*/
const array = [1,2,3,4];
let array2 = [...array, 5];

console.log(array);
console.log(array2);

const array3= array2.map((number) => number * 2);
console.log(array3);