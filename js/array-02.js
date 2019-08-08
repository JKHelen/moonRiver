/*
 * use iterator to add new array
 * map()
 * filter()
 */

// map() likes a little of forEach()
var arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(arr.toString());
function curve(grade) {
    return grade += 5;
}

var newScores = arr.map(curve);
console.log(newScores); // (10) [6, 7, 8, 9, 10, 11, 12, 13, 14, 5]
function first(word) {
    return word[0];
}
var words = ["I ", "Like", "IT"];
var less = words.map(first);
console.log(less);// (3) ["I", "L", "I"]
console.log(less.join(""));// ILI

/*
 * filter() seems a little bit like every()
 * while every() all return true return true
 * filter all return true not return true
 */
function isEven(num){
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 !=0;
}

var nums = [];
for (let i = 0; i < 20; ++i) {
    nums[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log("Even number is: " + evens); //Even number is: 2,4,6,8,10,12,14,16,18,20

var odds = nums.filter(isOdd);
console.log("Odd number is:" + odds); // Odd number is:1,3,5,7,9,11,13,15,17,19

// another interesting function use filter
function passing(num) {
    return num >= 60;
}
 var scores = [];
for (let i = 0; i < 20; ++i) {
    scores[i] = Math.floor(Math.random() * 101);
}

var passSScore = scores.filter(passing);
console.log("All scores: " + scores); // All scores: 28,85,53,90,40,92,46,9,5,14,83,12,42,100,47,8,34,23,87,96
console.log("Passing scores: " + passSScore); // Passing scores: 85,90,92,83,100,87,96

function after(str) {
    if (str.indexOf("all") > -1) {
        return true;
    }
    return false;
}

var words = ["alllove", "ball", "wall", "recall", "baby"];
var miss = words.filter(after);
console.log(miss); // (4) ["alllove", "ball", "wall", "recall"]









