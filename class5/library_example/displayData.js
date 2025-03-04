const libraryContainer = document.querySelector('.library');
/*
    Part 1: Classes
    Create a Book class that has the following properties:
    - element (HTMLElement)
    - title (string)
    - author (string)
    - numCopies (number, the number of copies available)

    Add the following methods:
    - displayBook():
        - Generates HTML to represent the book
*/
class Book {
    constructor(element, title, author, numCopies) {
        this.element = element;
        this.title = title;
        this.author = author;
        this.numCopies = numCopies;
    }

    displayBook() {
        this.element.innerHTML = '';

        // console.log(this.element, this.title, this.author, this.numCopies);
        // this.element.innerHTML = `${this.title}, ${this.author}, ${this.numCopies}`;
        this.element.classList.add('book');
        
        // create new title element
        const titleElement = document.createElement('p');
        titleElement.classList.add('book_title');
        titleElement.innerHTML = this.title;

        // create a new author element
        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.innerHTML = this.author;

        // create a numberofCopies element
        const numCopiesElement = document.createElement('p');
        numCopiesElement.classList.add('book_num_copies');
        numCopiesElement.innerHTML = "Available copies: " + this.numCopies;

        this.element.appendChild(titleElement);
        this.element.appendChild(authorElement);
        this.element.appendChild(numCopiesElement);
    }

    borrow() {
        if (this.numCopies > 1) {
            this.numCopies = this.numCopies - 1;
            this.displayBook();
        } else {
            this.numCopies = 0;
            this.displayBook();
            this.element.classList.add('disabled');
        }
    }
}

// for(let i = 0; i < books.length; i++) {
//     const myBookElement = document.createElement('div');
//     const myBook = new Book(myBookElement, books[i].title, books[i].author, books[i].numOfCopies);
//     myBook.displayBook();
//     myBookElement.addEventListener('click', () => {
//         myBook.borrow();
//     })
//     libraryContainer.append(myBookElement)
// }

/*
    Part 2: Encapsulation
    Add a function borrow():
        - Decreases the number of copies by 1 and prints how many copies are left.
        - If there are no more copies left, add a class "disabled" to the element.
*/

/*
    Part 3: Inheritance
    Create a new class Textbook which extends Book.
*/

class Textbook extends Book {
    constructor(element, title, author, numCopies) {
        super(element, title, author, numCopies);
        this.element.classList.add('textbook');
    }
}
const myTextbookElement = document.createElement('div');
const myTextbook = new Textbook(myTextbookElement, 'Textbook title', 'Textbook authors', 1);
myTextbook.displayBook();
myTextbookElement.addEventListener('click', () => {
    myTextbook.borrow();
})
libraryContainer.append(myTextbookElement)

/*
    Part 4: Polymorphism
    Create a new class Ebook which extends Book, and displays only the title and author.
*/

class Ebook extends Book {
    constructor(element, title, author) {
        super(element, title, author);
        this.element.classList.add('ebook')
    }

    displayBook() {
        this.element.innerHTML = '';

        // console.log(this.element, this.title, this.author, this.numCopies);
        // this.element.innerHTML = `${this.title}, ${this.author}, ${this.numCopies}`;
        this.element.classList.add('book');
        
        // create new title element
        const titleElement = document.createElement('p');
        titleElement.classList.add('book_title');
        titleElement.innerHTML = this.title;

        // create a new author element
        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.innerHTML = this.author;

        this.element.appendChild(titleElement);
        this.element.appendChild(authorElement);
    }
}
const myEbookElement = document.createElement('div');
const myEbook = new Ebook(myEbookElement, 'Ebook title', 'Ebook author');
myEbook.displayBook();
libraryContainer.append(myEbookElement);