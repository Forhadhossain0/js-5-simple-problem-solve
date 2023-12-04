// task 1
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "this is Invalid input.";
    }
    const  result = Math.pow(number,3);
    return result;
}
console.log(cubeNumber(3)); 
console.log(cubeNumber(4));  
console.log(cubeNumber('some strings')); 




// task 2
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Both inputs not strings.";
    }
    if (string1.includes(string2)) {
        return true;
    }
     else {
        return false;
    }
}
console.log(matchFinder("Forhad hossain", "hos")); 
console.log(matchFinder("Home Table", "potato")); 
console.log(matchFinder("Hello world", 100));




// task 3
function sortMaker(arr) {
    if (typeof arr[0] === 'number' && typeof arr[1] === 'number' && arr[0] >= 0 && arr[1] >= 0) {
          if (arr[0] < arr[1]) {
                 return [arr[1], arr[0]];
             } 
           else if (arr[0] > arr[1]) {
                 return [arr[0], arr[1]];
             } 
           else {
                 return "equal";
             }
    } 
    else {
        return "Invalid Input";
    }
}

console.log(sortMaker([2, 3])); 
console.log(sortMaker([4, 2]));   
console.log(sortMaker([4, 4]));  
console.log(sortMaker([1, 2]));   
console.log(sortMaker([4, -2]));  




// task 4
function findAddress(obj) {
    if (!obj.street) obj.street = " __ ";
    if (!obj.house) obj.house = " __ ";
    if (!obj.society) obj.society = " __ ";
 
    return [obj.street,obj.house,obj.society];
    
}

var a = findAddress({ street: 10 , house: " 15A ", society: " Earth Perfect " });
console.log(a);
var b = findAddress({ street: 10, society: " Earth Perfect " });
console.log(b); 
var c = findAddress({ street: 10 });
console.log(c); 




// task 5 
function canPay(array, chipsPrice) {
    let totalTaka = 0;

    for (let i = 0; i < array.length; i++) {
            totalTaka += array[i];
    }
    if (array.length === 0) {
        return "this is Empty";
    }
    return totalTaka >= chipsPrice;
}

var a = canPay([1, 2, 5], 10);
console.log(a);
var b = canPay([1, 5, 5], 10); 
console.log(b); 
var c = canPay([ ], 10);
console.log(c); 

