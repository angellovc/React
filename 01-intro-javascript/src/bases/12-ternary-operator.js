/* ternary operators */
let active = true;

let state = active? 'Activated': 'Desactivated';
console.log(state);

state = active && 'Activated';
console.log(state); 

active = false;

// state = active && 'Activaded';
// console.log(state); 
state = !active && 'Desactivated';
console.log(state); 
