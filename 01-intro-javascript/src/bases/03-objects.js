/* objects */
const person = {
  name: 'Angello',
  age: 25,
  where: {
    city: "medellín",
    zip: 4434,
  }
};
console.log(person);
console.log(person.name);
console.table(person);

/* copying objects */
const person2 = {...person};
person2.name = "Marcelo";
console.log(person.name);
console.log(person2.name);