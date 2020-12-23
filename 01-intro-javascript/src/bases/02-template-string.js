const firtsName = "Angello";
const lastName = "Villegas";

console.log(`${firtsName} ${lastName}`);


export function sayHi(name = 'Angello') {
  return `Hi ${name}`;
}
