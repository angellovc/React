/* the best way to work with function is
storing it into a const variable to avoid
future changes if the name of the fucntion
is accidentally used*/

// function hi () {
//   return 'hi';
// }
// console.log(hi());
// hi = 1;
// console.log(hi);

/* best practice */
const hiName = (name) => `Hi ${name}`;


export const getUser = () => ({
  id: "ABC123",
  name: "anyName",
});


export const getUserActive = (name) => ({
  id: "1123",
  name: name,
});
