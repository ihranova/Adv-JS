
import {Book} from './homework2-1';

interface Container<T> {
  put( el:T):void; 
  get():T;
  remove(el:T);
}

class Queue<T> implements Container<T>{

  private arr:T[];  

  constructor(){
   this.arr = [];
  }
  put( el:T):void{
       this.arr.push(el);
  }
  get():T{
     return this.arr.shift();
  }
  remove(el:T){
     this.arr = this.arr.filter(function(val){
         return el!=val;
     });
  }
}

var p = new Queue<number>();
p.put(1);
p.put(3);
p.put(5);
p.put(6);
p.put(2);
p.put(4);
p.put(6);
console.log(p.get());
p.remove(6);


var a = new Book("Harry Potter","Joana K",20);
var b = new Book("Hitar Peter","JKonstantin Iliev",20);
var library = new Queue<Book>();
library.put(a);
library.put(b);
console.log(library);
console.log(library.get());