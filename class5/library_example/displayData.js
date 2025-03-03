// const books = [
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         numOfCopies: 12,
//     },
//     {
//         title: '1984',
//         author: 'George Orwell',
//         numOfCopies: 7,
//     },
//     {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         numOfCopies: 5,
//     },
//     {
//         title: 'The Catcher in the Rye',
//         author: 'J.D. Salinger',
//         numOfCopies: 9,
//     },
//     {
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         numOfCopies: 15,
//     },
//     {
//         title: 'Moby-Dick',
//         author: 'Herman Melville',
//         numOfCopies: 8,
//     },
//     {
//         title: 'War and Peace',
//         author: 'Leo Tolstoy',
//         numOfCopies: 6,
//     },
//     {
//         title: 'The Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         numOfCopies: 20,
//     },
//     {
//         title: 'Harry Potter and the Sorcerer\'s Stone',
//         author: 'J.K. Rowling',
//         numOfCopies: 25,
//     },
//     {
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         numOfCopies: 18,
//     }
// ];


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
    constructor(element, title, author, numOfCopies) {
        this.element = element;
        this.title = title;
        this.author = author;
        this.numOfCopies = numOfCopies;

        this.element.classList.add('book');

        const self = this;
        this.element.addEventListener('click', function () {
            self.borrow();
        })
    }

    displayBook() {
        this.element.innerHTML = '';

        if (this.numOfCopies === 0) {
            this.element.classList.add('disabled');
        }

        const titleElement = document.createElement('p')
        titleElement.classList.add('book_title');
        titleElement.innerText = this.title;

        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.innerText = this.author;

        const numOfCopiesElement = document.createElement('p');
        numOfCopiesElement.classList.add('book_num_copies');
        numOfCopiesElement.innerText = 'Available copies: ' + this.numOfCopies;

        this.element.appendChild(titleElement);
        this.element.appendChild(authorElement);
        this.element.appendChild(numOfCopiesElement);
    }

    borrow() {
        if (this.numOfCopies > 0) {
            this.numOfCopies--;
            this.displayBook();
        }
    }

}

// const libraryElement = document.querySelector('.library');


// for (let i = 0; i < books.length; i++) {
//     const book1Element = document.createElement('div');
//     libraryElement.appendChild(book1Element);
//     const book1 = new Book(book1Element, books[i].title, books[i].author, books[i].numOfCopies);
//     book1.displayBook();
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
    constructor(element, title, author, numOfCopies) {
        super(element, title, author, numOfCopies);
        this.element.classList.add('textbook');
    }
}

// const textbookElement = document.createElement('div');
// libraryElement.appendChild(textbookElement);
// const textbook = new Textbook(textbookElement, 'Textbook title', 'Textbook author', 100);
// textbook.displayBook();



/* 
Part 4: Polymorphism

Create a new class Ebook which extends Book, and displays only the title and author.
*/

class Ebook extends Book {
    constructor(element, title, author) {
        super(element, title, author);
        this.element.classList.add('ebook');
    }

    displayBook() {
        this.element.innerHTML = '';

        if (this.numOfCopies === 0) {
            this.element.classList.add('disabled');
        }

        const titleElement = document.createElement('p')
        titleElement.classList.add('book_title');
        titleElement.innerText = this.title;

        const authorElement = document.createElement('p');
        authorElement.classList.add('book_author');
        authorElement.innerText = this.author;

        this.element.appendChild(titleElement);
        this.element.appendChild(authorElement);
    }
}

// const ebookElement = document.createElement('div');
// libraryElement.appendChild(ebookElement);
// const ebook = new Ebook(ebookElement, 'Ebook title', 'Ebook author');
// ebook.displayBook();
