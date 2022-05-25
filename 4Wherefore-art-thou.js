"use strict"

function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    function judgeSourceIn(obj) {
        for (const key in source) {
            // if (Object.hasOwnProperty.call(obj, key)) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] !== source[key]) //这里我个人觉得用[]比较好
                    return false
            } else {
                return false
            }
        }
        return true
    }
    arr = collection.filter(obj => judgeSourceIn(obj));
    // Only change code above this line
    return arr;
}

var arr = whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});
console.log(arr)