/*
    Part 5: Fetch the JSON data using fetch()
*/

function getBookData() {
    fetch('books.json')
    .then(data => data.json())
    .then(bookData => {
        console.log(bookData.length);
        for(let i = 0; i < bookData.length; i++) {
            const myBookElement = document.createElement('div');
            const myBook = new Book(myBookElement, bookData[i].title, bookData[i].author, bookData[i].numOfCopies);
            myBook.displayBook();
            myBookElement.addEventListener('click', () => {
                myBook.borrow();
            })
            libraryContainer.append(myBookElement)
        }
    });
}

async function getBookDataAsync() {
    const data = await fetch('books.json');
    const bookData = await data.json();
    for(let i = 0; i < bookData.length; i++) {
        const myBookElement = document.createElement('div');
        const myBook = new Book(myBookElement, bookData[i].title, bookData[i].author, bookData[i].numOfCopies);
        myBook.displayBook();
        myBookElement.addEventListener('click', () => {
            myBook.borrow();
        })
        libraryContainer.append(myBookElement)
    }
}

// getBookData();
getBookDataAsync();

/*
    Part 6: Fetch data from Gutendex and create a new class ExternalBook that extends Book to represent it
*/
