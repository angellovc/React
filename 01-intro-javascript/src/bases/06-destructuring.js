/* Desestructuration or destructuring assignation */
const person = {
  name: 'Tony',
  age: 45, 
  avatar: 'Ironman'
}

const {name} = person;
const {name:name2, age} = person;
console.log(name);
console.log(name2);
console.log(age);

const showPerson = ({name, age, range = 'Captain'}) => console.log(name, age, range);
showPerson(person);
person.range = 'Soldier';
showPerson(person);

const usContext = ({avatar, name, age, range}) => ({
    keyName: avatar,
    age: age,
    latlng: {
      lat: 1133,
      lng: 232,
    }
  });
/* Nested destructuring */
let {keyName, age:agePerson, latlng:{lat, lng}} = usContext(person);
console.log(keyName, agePerson);
console.log(lat, lng);
