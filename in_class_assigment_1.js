// Task 1

let x = 10;
if (x > 5) {
    console.log("Help")
};

let expenses = 1000;
if (expenses > 7000) {
    console.log("High Expenses");
} else {
    console.log("Manageable Expenses"); 
};

// Task 2
let score = 75;
if (score >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
};

// Task 3
for (let i = 10; i >= 1; i--) {
    console.log("Iteration: ", i);
    
};

//Task 5
let num = 2;
while (num <= 10) {
    console.log("The Number is: ", num);
    num += 2;
};

// Task 6
function calculateSquare(digit) {
    return digit * digit;
}
console.log(calculateSquare(4));