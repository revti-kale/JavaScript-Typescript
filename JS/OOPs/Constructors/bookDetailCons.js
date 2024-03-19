class myBook{
    constructor(title,author,publishedYear=2024){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    displayBookInfo(){
        console.log(`The Book title is "${this.title}",
         Auther of Book is "${this.author}" and Published year is ${this.publishedYear}`)
    }
}

let book = new myBook("Joy of Life","James G");
book.displayBookInfo();