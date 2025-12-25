
//http - hypertext transfer protocol
const xhr = new XMLHttpRequest(); //create new http request/message to send to backend
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev'); // 2 parameters
//1. type of http message: GET, POST, PUT, DELETE
//2. Where to send this http message: URL - Uniform Resource Locator
xhr.send(); // asynchronous code: does not wait for code to finish.

//status code starts with 4 or 5 (400, 404, 500) = failed
//4 - means our problem. 5 - backend issue
//status code starts with 2 (200, 201, 204) = succeeded

//Lists of URL paths supported are called Backend API = Aplication Programming Interface.

