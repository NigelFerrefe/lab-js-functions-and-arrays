// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) { 

    return num1 > num2 ? num1 : num2;
}
console.log(maxOfTwoNumbers(2, 5));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word) {
    if (word.length === 0) {
        return null;
    }
    let longestWord = word[0]; 
    for (let i = 1; i < word.length; i++) {
        if (longestWord.length < word[i].length) {
        longestWord = word[i];
        }
    }
    return longestWord;
}


console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(number) {
    if (number.length === 0) {
        return 0 // Return 0 if the array is empty
    }; 
    if (number.length === 1) {
        return number[0] // Return the first number if there's only one element
    }; 

    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i] //Sum the numbers
    }
    return sum;
}

console.log(sumNumbers(numbers));
console.log(sumNumbers([]));
console.log(sumNumbers([5]));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
averageNumbers(numbers2);
console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, str) {
    if (array.length === 0) {
        return null;
    }
    let found = false;
    array.forEach(element => {
        if (element === str) {
            found = true;
        }
    });
    return found
}
console.log(doesWordExist(words2, 'machine'));

