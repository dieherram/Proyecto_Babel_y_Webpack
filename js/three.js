// 3. three.js Debe contener una función que invoque las funciones presentes en one y two.
// Debe retornar sus resultados en un objeto con la siguiente estructura:
require('./one.js');
require('./two.js');

let arr = ([1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]);
let object = {};
let obj = {
status:'ok',
one: TakeGratherThanEight(multiplyByFour(arr)),
two: toString(object),
};

console.log(obj);