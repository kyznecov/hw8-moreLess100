"use strict";

let number = prompt("число?");

function returnNumber(number, more100, less100) {
    if (number < 100) {
        less100();
    } else {
        more100();
    }
};

returnNumber(
    number,
    () => {
        console.log('больше ста');
    },
    () => {
        console.log('меньше ста')
    }
);