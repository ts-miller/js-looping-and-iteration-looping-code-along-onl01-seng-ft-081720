// Code your solutions in this file
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        array.splice(i, 1, `Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return array;
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}