function loopApp() {
    var number = 1;
    var sum = 0;
    while ( number < 10 ) {
        sum += number;
        ++number;
    }
    return sum;
}

console.log(loopApp());

function sumApp(limitN) {
    var sum = 0;
    for (let i = 0; i < limitN; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumApp(10));

function arrayApp() {
    var arr = [12, 1, 3, "90", "Gwendolyn", "uiyi", 0];
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

arrayApp();

function arrTest(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += number;
    }
    return arr;
}

var arr = [12, 1, 4, 5, 0];
var newArr = arrTest(arr, 10);
console.log(newArr);

/*
* Test variable scope
* if use var to define an variable only changed in function
* if not use var to define this variable would be global
* after function call it will change its variable as global variable [scope 3]
 */
function testArea() {
    return scope1;
}
var scope1 = "global";
console.log(scope1); // global
console.log(testArea()); // global
console.log(scope1); // global


function testScope() {
    var scope2 = "local";
    return scope2;
}

var scope2 = "global";
console.log(scope2); // global
console.log(testScope()); // local
console.log(scope2); // global


function testScope() {
    scope3 = "local";
    return scope3;
}

var scope3 = "global";
console.log(scope3); // global
console.log(testScope()); // local
console.log(scope3); // local

/*
* use 递归
 */
function factorial( number ) {
    if (number == 1) {
        return 1;
    } else {
        return number * factorial( number - 1);
    }
}

var result = factorial(5);
console.log(result);































