'use strict';

const Gryffindor = 1;
const Slytherin = 2;
const Hufflepuff = 3;
const Ravenclaw = 4;

const name = prompt("Enter your name.");

let num = Math.floor(Math.random() * 5);

if (num === Gryffindor) {
    document.querySelector('#paragraph1').innerHTML = `Congratulations ${name}, you are in Gryffindor.`
}
else if (num === Slytherin) {
    document.querySelector('#paragraph1').innerHTML = `Congratulations ${name}, you are in Slytherin.`
}
else if (num === Hufflepuff) {
    document.querySelector('#paragraph1').innerHTML = `Congratulations ${name}, you are in Hufflepuff.`
}
else if (num === Ravenclaw) {
    document.querySelector('#paragraph1').innerHTML = `Congratulations ${name}, you are in Ravenclaw.`
}
