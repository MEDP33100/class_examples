/*
    Part 5: Fetch the JSON data using fetch()
*/


// function getBookData() {
//     fetch('books.json')
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             const libraryElement = document.querySelector('.library');
//             for (let i = 0; i < data.length; i++) {
//                 const book1Element = document.createElement('div');
//                 libraryElement.appendChild(book1Element);
//                 const book1 = new Book(book1Element, data[i].title, data[i].author, data[i].numOfCopies);
//                 book1.displayBook();
//             }
//         })
// }

// async function getBookData() {
//     const response = await fetch('books.json');
//     if (response) {
//         console.log(response);
//         const data = await response.json();
//         console.log(data);

//         const libraryElement = document.querySelector('.library');
//         for (let i = 0; i < data.length; i++) {
//             const book1Element = document.createElement('div');
//             libraryElement.appendChild(book1Element);
//             const book1 = new Book(book1Element, data[i].title, data[i].author, data[i].numOfCopies);
//             book1.displayBook();
//         }
//     }
// }

// getBookData();

/*
    Part 6: Fetch data from Gutendex and create a new class ExternalBook that extends Book to represent it
*/

const libraryElement = document.querySelector('.library');

async function getGutendexData() {
    const response = await fetch('gutendex.json');
    console.log(response);
    const data = await response.json();
    console.log(data);
    // do what i want with data
    for (let i = 0; i < data.results.length; i++) {
        const bookEl = document.createElement('div');
        libraryElement.appendChild(bookEl);
        const book = new ExternalBook(bookEl, data.results[i].title, data.results[i].authors, data.results[i].formats);
        book.displayBook();
    }
}

class ExternalBook extends Book {
    constructor(element, title, authors, formats) {
        super(element, title, authors);

        this.formats = formats;
        this.element.classList.add('external_book');
    }

    displayBook() {
        this.element.innerHTML = '';

        if (this.numOfCopies === 0) {
            this.element.classList.add('disabled');
        }

        const titleElement = document.createElement('p')
        titleElement.classList.add('book_title');
        titleElement.innerText = this.title;

        this.element.appendChild(titleElement);

        for (let i = 0; i < this.author.length; i++) {
            const authorElement = document.createElement('p');
            authorElement.classList.add('book_author');
            console.log(this.author[i]);
            authorElement.innerText = this.author[i].name;
            this.element.appendChild(authorElement);
        }

        this.element.style.backgroundImage = `url("${this.formats['image/jpeg']}")`


    }
}

getGutendexData();