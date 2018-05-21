//Task 1


function Book(ntitle = '', nauthor = '', nprice = ''){
	//private 
	let title = ntitle;
	let author = nauthor;
	let price = nprice;
    
    // public methods
    this.setTitle = function(ntitle){
       title = ntitle;
    }
    this.setAuthor = function(nauthor){
    	author = nauthor;
    }
    this.setPrice = function(nprice){
    	price = nprice;
    }
    //private method
    function getTitle() {
       return title;
    }
    function getAuthor() {
    	return author;
    }

    //this is public because I use prototype from task 3
    this.getPrice = function() {
    	return price;
    }


    //public function
    this.print = function(){
       let msg = "======BOOK==========\n"
       msg += "The book is: \n";
       msg += "title: " + getTitle() + "\n";
       msg += "author: " + getAuthor() + "\n";
       msg += "price: " + this.getPrice();
      
       console.log(msg);
    }

}
//create new object
let book = new Book('Harry Potter', "J. K. Rowling", 20);

//console.log(book.getTitle()); //show error, because the function is private 

book.setPrice(50); //update new price
book.print(); // print book






//Task 2

//literal

let book1 = {
	title: "Harry Potter",
	author: "J. K. Rowling",
	price: 20,
	print: function(){
        let msg = "======BOOK==========\n"
       msg += "The book is: \n";
       msg += "title: " +this.title + "\n";
       msg += "author: " + this.author + "\n";
       msg += "price: " +this.price + "\n";
       msg += "====================";
       console.log(msg);
	}
}

console.log(book1.title);
book1.price = 30;
console.log(book1.print());


//literal with function

let Book2 = (function(){
    let title;  
    let author; 
    let price;
    //private functions and methods
    function setBook(ntitle ,nauthor,nprice){
      title = ntitle;
	    author = nauthor;
	    price = nprice;
    }
    function getTitle(){
       return title;
    }
    function getAuthor(){
    	return author;
    }
    function getPrice(){
    	return price;
    }
    function setTitle(ntitle){
       title = ntitle;
    }
    function setAuthor(nauthor){
    	author = nauthor;
    }
    function setPrice(nprice){
    	price = nprice;
    }
    function print_help(){
       let msg = "======BOOK==========\n"
       msg += "The book is: \n";
       msg += "title: " + getTitle() + "\n";
       msg += "author: " +  getAuthor()  + "\n";
       msg += "price: " + getPrice() + "\n";
       msg += "====================";
       console.log(msg);
    }
    return function(ntitle = '', nauthor = '', nprice = ''){
    	   setBook(ntitle ,nauthor,nprice);
    	   this.print = print_help;
    	   this.setprice = setPrice;
    	   this.settitle = setTitle;
    	   this.setauthor = setAuthor;  
    }
})();
let book2 = new Book2('Harry Potter', "J. K. Rowling", 20);
book2.setprice(40);
book2.print();



//Task 3
//I use task 1

//second function console same as print
Book.prototype.console = function(){
	this.print();
}

// I add promo price..
Book.prototype.setPromoPrice = function(procent){
	this.promo = this.getPrice() - this.getPrice() * procent / 100;
	//console.log(`Promo price is: ${promo}`)
}
Book.prototype.showPromoPrice = function(){	
	if(this.promo){
		console.log(`Promo price is: ${this.promo}`);
	}
	
}

book.setPromoPrice(32); // отстъпка с 32 процента върху цената

//I add year and show result

Object.defineProperty( Book.prototype, 'year', {
    set: function(nyear){        
      year = nyear;         
    }, 
    get: function(){
      return year;
    }    
});

Book.prototype.show_year = function(){
	console.log("year is: " + year);
}


//show book, promo price and year
Book.prototype.show = function(){
	this.print();
	this.show_year();
	this.showPromoPrice();
}

book.year = "1995";
console.log(book.year);
book.show();

//task 4

Array.prototype.findMin = function(){
	var len = this.length;
	var min = this[0];
	for(var i = 1; i < len; i++){
			if(this[i] < min){
			min = this[i];
		}
  }
  return min;
}

Array.prototype.findMax = function(){	
	var len = this.length;
	var max = this[0];
	for(var i = 1; i < len; i++){
			if(this[i] > max){
			max = this[i];
		}
  }
  return max;
}
console.log([1,25,6,2,3,56].findMax());