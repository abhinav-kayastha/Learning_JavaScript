'use strict';

let nums = [];

while (true) {
    let num = parseInt(prompt('Enter a number. Enter previously entered number to exit.'));
    if (num in nums) {
        break;
    }

    else {
        nums.push(num);
    }
}

let i = 0;

while (i < nums.length) {
    console.log(nums[i]);
    i++;
}