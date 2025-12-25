import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//async make a function return a promise
//await let use wait for a promise to finish before going to the next line/
async function loadPage() {
    try {
        //throw 'error1'
        await loadProductsFetch(); //load products, wait for it to finish

        //then load cart, wait for it to finish
        const value = await new Promise((resolve, reject) => {
            loadCart(() => { //wait to finish second step
                //reject('error3')
                resolve('value3'); //call resolve --> go third step
            });
        });

    } catch (error) {
        console.log('Unexpected error. Please try again later');
    }
    

    //then run rest of the code
    renderOrderSummary();
    renderPaymentSummary();

    //await let us write asynchronous code like normal code. no need for .then anymore.
    //we can only use await when inside a async function
    //return 'value2'; //converted to resolve('value2)
}

loadPage() /*.then((value) => {
    console.log(value);
    console.log('next step');
});
*/

//VS promise class

/*
//promise.all, give it an array of promises, wait for all promise to finish
Promise.all([
    // new Promise((resolve) => { 
    //     loadProducts(() => { 
    //         resolve('value1');
    //     });
    // }),
    loadProductsFetch(), // loadProductsFetch returns a promise directly
    new Promise((resolve) => {
        loadCart(() => { //wait to finish second step
            resolve(); //call resolve --> go third step
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
//promise class run the function immediately. resolve let us control when to go to the next step
//loadProducts asynchronous code
//1. run asynchronous code: loadProducts
//2. after finish running, run resolve
//3. resolve makes it go to the next step
new Promise((resolve) => { 
    //console.log('start promise')
    loadProducts(() => {  //wait to finish
        //console.log('finish loading')
        resolve('value1'); //after finish --> go second step. parameter inside resolve allow sharing of value between 2 steps
    });

}).then((value) => { //second step
    console.log(value)
    //console.log('next step')
    //we return a new promise, with a function as parameter. This allow us to wait for loadCart to finish, then run resolve to go to next step again.
    return new Promise((resolve) => {
        loadCart(() => { //wait to finish second step
            resolve(); //call resolve --> go third step
        });
    });
    
}).then(() => { //third step
    renderOrderSummary();
    renderPaymentSummary();
});
*/




//why use promise: Avoid nesting
//disadvantages of callbacks: Multiple callbacks causes alot of nesting

/*
//callback function
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
});
*/