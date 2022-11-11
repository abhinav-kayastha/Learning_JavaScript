'use strict';

let startYear = parseInt(prompt('Enter a starting year.'))
const endYear = parseInt(prompt('Enter an ending year.'))

while (startYear <= endYear) {
    if (startYear % 100 === 0) {
        if (startYear % 4 === 0 && i % 400 === 0) {
            document.querySelector('#list1').innerHTML = `<li>{startYear}</li>`;
            startYear++
        }
    }

    else if (startYear % 4 === 0) {
    document.querySelector('#list1').innerHTML = `<li>{startYear}</li>`;
    startYear++
    }
    else {
        startYear++
    }
}