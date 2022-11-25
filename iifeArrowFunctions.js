/* immediately invoked function expression ou iife*/
// {function helloworld(){
//         alert('Hello World');
// }
// }();
// {function (message){
//     alert(message);
// }
// }('Hello World');

//exemplo com map

const materials = [
    'produto 1',
    'produto 2',
    'produto 3',
    'produto 4'
];
const newArray = materials.map(m => m, length)
console.log(newArray)