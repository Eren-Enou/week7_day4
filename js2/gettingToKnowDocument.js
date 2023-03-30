console.log("Lets get to know the document");

console.log(document);

// console.log(document.body);
// console.dir(document.body);

let body = document.body;

body.style.backgroundColor = 'aqua';

let children = body.children;
console.log(children);  

let navBar = children[0];
console.log(navBar);
// console.dir(navBar);

navBar.className = 'navbar bg-primary-subtle';

//Popular Methods with the Document Object

//Document get Methods

//document.getElementById('id')
//return the first element with an id that matches the string id

let topHeader = document.getElementById('top-header');
console.log(topHeader);

// document.getElementsByTagName('tagName')
// return an HTMLCollection (Array-like) of all elements that match tag name
let buttons = document.getElementsByTagName('button');
console.log(buttons);

// document.getElementsByClassName('className')
// return an HTMLCollection (array-like) of all elements that match class name
let rows = document.getElementsByClassName('row');
console.log(rows);

//document.querySelector('selector')
// return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2'); //simple selector
console.log(firstCol);

let divInNav = document.querySelector('nav > div'); // combinator selector - child selector
console.log(divInNav);

//document.QuerySelectorAll('selector')
//returns NodeList (Array like) elements that match specified selector,

let buttoninRow = document.querySelectorAll('.row button');
console.log(buttoninRow);

//Create Elements with document
//document.createElement('tagName');
//create an element with the given tag name.
let newHeader = document.createElement('h4');
newHeader.innerHTML='Header Created By JavaScript';
newHeader.className = 'text-center text-danger';

//Add element to the HTML
//append the elementToAdd as the last hicld of Element

//body.append(newHeader)
//body.prepend(newHeader)
//Element.after(elementToAdd)
//Element.before(elementToAdd)

//Create New Button
let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';
//Apend the button to the row of buttons
rows[1].append(newButton);

//HTMLCollection is live and recognizes the new button
console.log(buttons);

//NodeList is static and will not recognize the added button
console.log(buttoninRow);
