// Debe contener una función que tome todos los elementos de un arreglo, multiplique
// por 4 cada uno de los elementos y luego filtre por los elementos que sean mayores a 8.
// Retornando todos los elementos mayores o iguales a 8 luego de aplicar la función. Use el
// siguiente arreglo de ejemplo: [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]
let arr = ([1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]);

multiplyByFour = (arr) => arr.map((elem) => elem * 4);
TakeGratherThanEight = (arr) => arr.filter ((elem) => elem > 8);

let new_arr = TakeGratherThanEight (multiplyByFour(arr));
