function subscribe(){
    const buttonElement = (document.querySelector('.js-subscribe-button'));

    if (buttonElement.innerHTML === 'Subscribe') { //can use .innerText instead to ensure (if any) spaces are accounted for in the button Element
        buttonElement.innerHTML = 'Subscribed';
        // adding a new class to the buttonElement
        buttonElement.classList.add('is-subscribed'); //for styling
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}
function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);  //input element does not have html. so we use .value instead

    if (cost < 40) {
        cost += 10;
    }

    document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${cost}`;
}

function handleCostKeydown(event){
    console.log(event.key);
    if (event.key === 'Enter'){
        calculateTotal();
    }    
}

//window is a built in object
window.document //same as document
window.console.log('window') //same as console.log
window.alert //same as alert