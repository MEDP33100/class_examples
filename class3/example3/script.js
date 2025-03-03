// Change the text of the title to "Hello world"
function changeText() {
    console.log('change text')
    // select the element
    const myTitleElement = document.getElementById('mainTitle');
    console.log(myTitleElement);
    // change the element
    myTitleElement.innerText = "Hello world";
}




// Change the color of all the boxes to black
function changeColors() {
    // select the elemnts
    const boxElements = document.getElementsByClassName('box');
    // console.log(boxElements)
    // change the elements
    for (let i = 0; i < boxElements.length; i++) {
        // console.log(boxElements[i])
        boxElements[i].style.backgroundColor = 'black';
    }
}



// Hide/show the description 
function toggleDescription() {
    const description = document.querySelector('.description');
    
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}




// Add a paragraph to #container
function addParagraph() {
    const pElement = document.createElement('p');
    pElement.innerText = "my new paragraph";

    const containerElement = document.querySelector('#container');
    console.log(containerElement);
    containerElement.appendChild(pElement);
}