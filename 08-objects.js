/*
const product = {
    name: 'socks',
    price: 1090
};

// console.log(product);
// console.log(product.name); //dot notation

// product.name = 'cotton socks';
// console.log(product.name);

const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1(){ //This is a method
        console.log('function inside object'); 
    }
};

console.log(product2['delivery-time']);
console.log(product2.rating.stars);
product2.fun();

console.log(JSON.stringify(product2)); //JSON does not support single quotes, and functions. JSON is more universal across different programming languages.
const jsonString = JSON.stringify(product2)
console.log(JSON.parse(jsonString));
*/


//auto boxing
console.log('hello'.length);
console.log('hello'.toUpperCase());

//objects are references.
const object1 = { //object 1 points/reference to the value of the object that is stored some where in memory
    message: 'hello'
};

//copy by reference
const object2 = object1; //object2 points to where object 1 points.

object1.message = 'Good Job!';
console.log(object1);
console.log(object2); //object 2 is also changed, as its pointing to the same value as object1

const object3 = {
    message: 'Good Job!'
};

console.log(object3 === object1); //false. References are being compared with are different
console.log(object2 === object1); //true. obj2 and obj1 points to the same object in memory

const object4 = {
    message: 'Good Job!',
    price: 799
};

//destructuring
//const message = object4.message;
const { message, price } = object4; //same as the line above
console.log(message);
console.log(price);

//shorthand property and method
const object5 = {
    //message: message
    message, //same as line above
    // method: function function1() {
    //     console.log('method');
    // }
    method(){ //same as line above
        console.log('method');
    }
};
console.log(object5);