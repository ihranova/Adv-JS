"use strict";
exports.__esModule = true;
var homework2_1_1 = require("./homework2-1");
var Queue = /** @class */ (function () {
    function Queue() {
        this.arr = [];
    }
    Queue.prototype.put = function (el) {
        this.arr.push(el);
    };
    Queue.prototype.get = function () {
        return this.arr.shift();
    };
    Queue.prototype.remove = function (el) {
        this.arr = this.arr.filter(function (val) {
            return el != val;
        });
    };
    return Queue;
}());
var p = new Queue();
p.put(1);
p.put(3);
p.put(5);
p.put(6);
p.put(2);
p.put(4);
p.put(6);
console.log(p.get());
p.remove(6);
var a = new homework2_1_1.Book("Harry Potter", "Joana K", 20);
var b = new homework2_1_1.Book("Hitar Peter", "JKonstantin Iliev", 20);
var library = new Queue();
library.put(a);
library.put(b);
console.log(library);
console.log(library.get());
