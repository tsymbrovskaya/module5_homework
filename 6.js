let arr = [1,2,3];
let equal = true
arr.forEach(function(item, index, array) {
    if (item!==array[0]){
        equal = false
    }
});
console.log(equal);