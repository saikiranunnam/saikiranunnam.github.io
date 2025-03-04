// Sai Kiran Chowdary Unnam
// A20552979
// ITMD 541-01 Graduate Student

// Exercise #1 - Create a function to find and log the min, max, and average of an array.
console.log("Exercise #1: Min, Max, Average");
function minMaxAverage(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;
    console.log(`Total Numbers: ${arr.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Demonstration
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([117, 142, 21, 208, 235]);
minMaxAverage([95, 154, 246, 55, 123]);
minMaxAverage([3, 21, 77, 46, 39]);

console.log("\n");

// Exercise #2 - Counts vowels in a string and logs the result.
console.log("Exercise #2: Vowel Count");
function countVowels(str) {
    let count = (str.match(/[aeiou]/gi) || []).length;
    console.log(`${str}: ${count} vowels`);
}

// Demonstration
countVowels("Winter");
countVowels("Illinois");
countVowels("Web Development");
countVowels("India");
countVowels("Spy");

console.log("\n");

// Exercise #3 - Sorts an array of numbers in ascending order and logs the original and sorted arrays.
console.log("Exercise #3: Sorting Numbers");
function sortNumbers(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    console.log(`Original Array: [${arr}] => Sorted Array: [${sortedArr}]`);
}

// Demonstration
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 8, 20, 1]);
sortNumbers([100, 50, 75, 25, 0]);
sortNumbers([96, 45, 23, 88, 108]);
sortNumbers([111, 22, 99, 15, 69]);

console.log("\n");

// Exercise #4 - Converts Celsius to Fahrenheit and logs the result.
console.log("Exercise #4: Celsius to Fahrenheit");
function celsiusToFahrenheit(temp) {
    let celsius = parseFloat(temp);
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Demonstration
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-10);
celsiusToFahrenheit(-20);
celsiusToFahrenheit(-15.5);
celsiusToFahrenheit("35");
celsiusToFahrenheit("100");

console.log("\n");

// Exercise #5 - Sorts people by age and logs their name, age, and city.
console.log("Exercise #5: Sorting People by Age");
function sortPeopleByAge(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(p => `${p.name} is ${p.age} and from ${p.city}`);
    introductions.forEach(intro => console.log(intro));
}

// Demonstration
const peopleArray1 = [
    { name: "Ajay", age: 25, city: "Boston" },
    { name: "Nihal", age: 22, city: "Chicago" },
    { name: "Siry", age: 30, city: "Dallas" },
    { name: "Praneeth", age: 28, city: "Los Angeles" },
    { name: "Siddu", age: 21, city: "Florida" }
];

const peopleArray2 = [
    { name: "Akshith", age: 40, city: "Miami" },
    { name: "Uma", age: 35, city: "Seattle" },
    { name: "Harshu", age: 27, city: "Austin" },
    { name: "Kaushik", age: 50, city: "New York" },
    { name: "Shreya", age: 32, city: "San Diego" }
];

sortPeopleByAge(peopleArray1);
sortPeopleByAge(peopleArray2);
