console.log([1] == [1]); // false

function testThree(a, obj1, obj2) {
    var a = 10 * 10;
    var obj1 = {item1: "changed"};
    var obj2 = {item2: "changed"};
}

var a = 10;
obj1 = {item1: "unchanged"};
obj2 = {item2: "unchanged"};
testThree(a, obj1, obj2);
console.log(a); // 10
console.log(obj1.item1); //unchanged
console.log(obj2.item2); //unchanged