"use strict"

function destroyer(arr) {
    let argu = [].slice.call(arguments, 1)
    console.log(argu)

    function filterArr(arr, one) {
        if (arr.indexOf(one) == -1)
            return;
        arr.splice(arr.indexOf(one), 1)
        filterArr(arr, one)
        return;
    }
    argu.forEach(element => {
        filterArr(arr, element)
    });
    return arr
}
var arr = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(arr)

//solution 2
// function destroyer(arr) {
//   let valsToRemove = Object.values(arguments).slice(1);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(item => item !== null);
// }

//solution 3
// function destroyer(arr) {
//   var valsToRemove = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !valsToRemove.includes(val);
//   });
// }

//solution 4
// function destroyer(arr, ...valsToRemove) {
//   return arr.filter(elem => !valsToRemove.includes(elem));
// }