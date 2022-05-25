"use strict"

function diffArray(arr1, arr2) {
    const newArr = [];

    function onlyInFirst(first, second) {
        first.forEach(element => {
            //debugger
            let newele = second.find(ele => element === ele)
            if (newele === undefined && newArr.indexOf(element) === -1)
                newArr.push(element)
        });
    }
    onlyInFirst(arr1, arr2)
    onlyInFirst(arr2, arr1)
    return newArr;
}

var a = diffArray([1, "adc", "adc", 3, "sss", 5], [1, 2, 3, 4, 5]);
console.log(a);
//solution 2
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//solution 3 注：会有重复元素
// function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//     function diff(a, b) {
//         return a.filter(item => b.indexOf(item) === -1);
//     }
// }