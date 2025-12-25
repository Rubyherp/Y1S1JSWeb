let age = 'yay';

if (age >= 16){
    console.log('You can drive');
} else if (typeof(age) !== 'number') {
    console.log('Error: Age')
} else {
    console.log('You cannot drive');
}