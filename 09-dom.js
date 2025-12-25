
//Document Object Model - DOM
/*
document.body.innerHTML = 'Hello';
document.title = 'Good Job';
*/

/*
console.log(document.title);
document.title = 'Changed';

console.log(document.body);
console.log(typeof document.body); //an Object

console.log(document.body.innerHTML) //controls all the HTML
document.body.innerHTML = 'Changed';
document.body.innerHTML = '<button>Good Job!</button>' // can replace with HTML. Not just text.
*/

//document query selector

console.log(document.querySelector('button')); //get any element from the page, and put it in our javascript
console.log(document.querySelector('button').innerHTML);
console.log(document.querySelector('button').innerHTML = 'Changed'); //change the html inside the element

console.log(document.querySelector('.js-button')); //starts with a dot. to indicate a class. It is called a class selector
const buttonElement = document.querySelector('.js-button'); //HTML elements are JS objects. Objects are values, so we can save them inside a variable
console.log(buttonElement);