"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    function Book(ntitle, nauthor, nprice) {
        this._title = ntitle;
        this._author = nauthor;
        this._price = nprice;
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (ntitle) {
            this._title = ntitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (nauthor) {
            this._author = nauthor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (nprice) {
            this._price = nprice;
        },
        enumerable: true,
        configurable: true
    });
    Book.prototype.toString = function () {
        return "Book: title is " + this.title + ", author is  " + this.title + ", price is " + this.price;
    };
    return Book;
}());
exports.Book = Book;
var b = new Book("Harry Potter", "J. K. Rowling", 20);
//console.log(b);
b.price = 30;
console.log(b.toString());
