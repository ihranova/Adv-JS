export class Book{
	 
     private _title:string;
     private _author:string;
     private _price:number;

    constructor(ntitle:string, nauthor:string, nprice:number){
        this._title = ntitle;
        this._author = nauthor;
        this._price = nprice;
    }
    set title(ntitle:string){
      this._title = ntitle;
    }
    set author(nauthor:string){
      this._author = nauthor;
    }
    set price(nprice:number){
      this._price = nprice;
    }
    get title():string{
        return this._title;
    }
    get author():string{
        return this._author;
    }
    get price():number{
        return this._price;
    }
    toString():string{
    return `Book: title is ${this.title}, author is  ${this.title}, price is ${this.price}`;
    }
}

const b:Book = new Book("Harry Potter", "J. K. Rowling",20);
//console.log(b);
b.price = 30;
console.log(b.toString());

