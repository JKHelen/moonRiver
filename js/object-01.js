/*
* constructor function
 */
function checkBank(amount) {
    this.balance = amount; // 属性
    this.add = add; // 方法
    this.move = move; // 方法
    this.toString = toString;
}

    function add( amount) {
        this.balance += amount;
    }

    function move(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        if (amount > this.balance) {
            alert("Insufficient Balance!!!")
        }
    }

    function toString() {
        return "Balance: " + this.balance;
    }


var account = new checkBank(100);
account.add(10);
console.log(account.toString());
account.move(20);
console.log(account.toString());
