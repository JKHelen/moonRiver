/*
 * Test array
 */
var arr0 = [];
console.log( arr0); // []
console.log( arr0.length); // 0

var arr1 = [1, 3, 32, 33, 12];
console.log(arr1);
console.log(arr1.length); // 5
console.log(arr1.toString());

var arr2 = new Array();
console.log(arr2); // []
console.log(arr2.length); // 0

var arr3 = new Array(1, 2, 3, 4, 5, 6);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
console.log(arr3.length); // 6

var arr4 = new Array(10);
console.log(arr4); // (10) [empty * 10]
console.log(arr4.length); // 10
console.log( arr4 == null); // false
console.log(Array.isArray(arr4));
console.log(Array.isArray(arr3));
console.log(Array.isArray(arr2));
console.log(Array.isArray(arr1));
console.log(Array.isArray(arr0));
console.log(Array.isArray(4));
var arr5 = [1, "12", true, "string", null, undefined];
console.log(Array.isArray(arr5)); //true
console.log(arr5);
console.log(arr5.length);

var numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i + 1;
}
console.log(numbers);
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
numbers[20] = 100;
console.log(numbers.length);
console.log(numbers);
/*
 * use string to become array
 */
var sentence = " I am in Here to Wait U ";
var words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    console.log("word " + i + ": " + words[i]);
}

/*
 * let one array equals anther array
 */
var array1 = [];
for (let i = 0; i < 10; ++i) {
    array1[i] = i + 1;
}
var sameArray1 = array1;
console.log(sameArray1);
array1[0] = 100;
console.log(sameArray1[0]); // 100
/*
 * the above is low copy:   浅复制 ： new array still point to the old array
 * while
 */


/*
 * The follow is deep copy: 深复制
 */
function copy(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}

var a1 = [12, 10, 9, 8, 7, 0];
var a2 = [];
copy(a1, a2);
console.log(a2);
a1[0] = "string";
console.log(a1); //(6) ["string", 10, 9, 8, 7, 0]
console.log(a2); // (6) [12, 10, 9, 8, 7, 0]
var position = a1.indexOf(0);
console.log(position);// 5
console.log(a1.indexOf(1)); // -1
console.log(a1.indexOf(12)); // -1
console.log(a1.indexOf(10)); // 1
console.log(a1.indexOf(8)); // 3
console.log(a1.indexOf(9)); // 2
console.log(a1.indexOf(12)); // -1 ???? why??? shouldn't it be 0???
var books = [
    "Math",
    "PE",
    "Art",
    "Chinese",
    "Physical",
    "PE",
    "Art"
];
// var fav_book = "Math";
// var fav_book = "Art";
var fav_book = "PE";
// var fav_book = "Chinese";
console.log(books);
var pos1 = books.indexOf( fav_book );
var pos2 = books.lastIndexOf( fav_book );
if (pos1 >= 0) {
    console.log("1st Found " + fav_book + " at : " + pos1); // 1
    console.log("last Found " + fav_book + " at : " + pos2); // 5
} else {
    console.log("There is no " + fav_book + " in array books");
}

/*
 * 2 ways print array as string
 */
var stringBooks = books.join();
console.log(stringBooks); //Math,PE,Art,Chinese,Physical,PE,Art
stringBooks = books.toString();
console.log(stringBooks); // Math,PE,Art,Chinese,Physical,PE,Art

/*
 * 由 已有数组创建新数组
 * concat()
 * splice()
 */
var union = books.concat(numbers);
console.log(union); // 28) ["Math", "PE", "Art", "Chinese", "Physical", "PE", "Art", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, empty × 10, 100]
var parts = union.splice(1, 6);
console.log(parts); // (6) ["PE", "Art", "Chinese", "Physical", "PE", "Art"]
// add use push add from last
parts.push("I love it");
console.log(parts); // (7) ["PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it"]
parts[parts.length] = 123;
console.log(parts); // (8) ["PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 123]

// if want to add from 1st one need to move others
var start_one = 169;
for (let i = parts.length; i > 0; --i) {
    parts[i] = parts[i - 1];
}
parts[0] = start_one;
console.log(parts); // (9) [169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 123]
/*
 * BUT above is low.... if too much operations
 * can use unshift to add from 1st location
 */
var new_element = 666;
parts.unshift(new_element);
console.log(parts); // (10) [666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 123]
parts.unshift(new_element, 21, 90);
console.log(parts); // (13) [666, 21, 90, 666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 123]

//delete from last
parts.pop();
console.log(parts); // (12) [666, 21, 90, 666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it"]
// if want to delete from 1st low
for (let i = 0; i < parts.length; ++i) {
    parts[i] = parts[i + 1];
}
console.log(parts); // [21, 90, 666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", undefined]
parts.shift(); // delete from 1st one
console.log(parts); //  [90, 666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", undefined]
// can use pop and shift to save deleted elements in another array

var first_element = parts.shift();
var last_element = parts.pop();
console.log(parts); // (9) [666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it"]
parts.push(first_element); // 90
parts.unshift(last_element); // undefined
console.log(parts); // (11) [undefined, 666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 90]

// add && delete from pointed location use splice
parts.shift();// (10) [666, 169, "PE", "Art", "Chinese", "Physical", "PE", "Art", "I love it", 90]
var add_from_middle = [4, 5, 6];
parts.splice(3, 0, add_from_middle);
console.log(parts); //  [666, 169, "PE", Array(3), "Art", "Chinese", "Physical", "PE", "Art", "I love it", 90]
parts.splice(4, 0, 1, 2, 3, 4);
console.log(parts); // (15) [666, 169, "PE", Array(3), 1, 2, 3, 4, "Art", "Chinese", "Physical", "PE", "Art", "I love it", 90]
parts.splice(5, 3, 0);
console.log(parts); // (13) [666, 169, "PE", Array(3), 1, 0, "Art", "Chinese", "Physical", "PE", "Art", "I love it", 90]
parts.splice(5, 2);
console.log(parts); // (11) [666, 169, "PE", Array(3), 1, "Chinese", "Physical", "PE", "Art", "I love it", 90]
var middle_elements = [11, 22, "abc"];
parts.splice(0, 0, middle_elements);
console.log(parts); // 12) [Array(3), 666, 169, "PE", Array(3), 1, "Chinese", "Physical", "PE", "Art", "I love it", 90]

//sort array
parts.reverse(); //(12) [90, "I love it", "Art", "PE", "Physical", "Chinese", 1, Array(3), "PE", 169, 666, Array(3)]
//string type array use sort
books.sort(); // (7) ["Art", "Art", "Chinese", "Math", "PE", "PE", "Physical"]
// but if array type is date
numbers.sort(); // (21) [1, 10, 100, 2, 3, 4, 5, 6, 7, 8, 9, empty × 10]
/*
 * Reason above cause: sort() 方法按照字典数排序 默认元素都是 字符串类型 can add one compare function to sort number array
 */
function  compare( number1, number2) {
    return number1 - number2;
}
numbers.sort( compare); // numbers (21) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, empty × 10]

// no need to produce new array Iterator 迭代器
// forEach( 1 个 function as 参数)
function square(number) {
    console.log(number, number * number);
}
var numbers_new =[0, 1, 2, 3, 4, 5, 6];
numbers_new.forEach(square); // 0 0
                            // array-01.js:213 1 1
                            // array-01.js:213 2 4
                            // array-01.js:213 3 9
                            // array-01.js:213 4 16
                            // array-01.js:213 5 25
                            // array-01.js:213 6 36
parts.forEach((a)=>{ console.log( a + " \\ " + a)});


/*
 * every( return boolean function )
 * if all elements in function return true every return true
 */
function isEven(number) {
    return number % 2 == 0;
}
var evens = [0, 2, 4, 6, 8, 10];
function allEven() {
    if (evens.every(isEven)) {
        console.log("All numbers are even: " + evens); //All numbers are even: 0,2,4,6,8,10
    } else {
        console.log("Not all numbers are even !!! " + evens);
    }
}

evens.push(11);
allEven(); // Not all numbers are even !!! 0,2,4,6,8,10,11
evens.pop();
allEven(); // All numbers are even: 0,2,4,6,8,10

function someEven( arr) {
    if (arr.some(isEven)) {
        console.log("some numbers are even: " + arr); //All numbers are even: 0,2,4,6,8,10
    } else {
        console.log("No  numbers are even !!! " + arr);
    }
}
evens.push(17);
someEven(evens); // some numbers are even: 0,2,4,6,8,10,17
var noevens = [1,3,5,7,9];
someEven(noevens); // No  numbers are even !!! 1,3,5,7,9


//reduce add array by return a function
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var testArray = [];
for (let i = 0; i < 10; ++i) {
    testArray[i] = i + 1;
}

var sums = testArray.reduce(add);//
console.log(sums); // 55
//
var stringArray = ["Harry ", "Gwendolyn ", "loves ", "Magic "];
console.log(stringArray.reduce(add)); // Harry Gwendolyn loves Magic
console.log(stringArray.reduceRight(add)); // Magic loves Gwendolyn Harry





