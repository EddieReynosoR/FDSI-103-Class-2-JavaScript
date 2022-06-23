//let userName=prompt("Enter your name: ");

// console.log(`Welcome to the system ${userName}`);

// document.write(`Welcome to the system ${userName}`);

// Class exercise

// let Email, Name, Salary;

// Name = prompt("Hello, enter your name: ");
// Email = prompt("Enter your email: ");
// Salary = prompt("Enter your salary (monthly): ");

// document.write(`
//     <h1> User information </h1>
//     <p> <b>Name:</b> ${Name} </p>
//     <p> <b>Email:</b> ${Email} </p>
//     <p> <b>Salary (monthly):</b> $${Salary} </p>
//     `);

// if(confirm("Are you " + userName + "?")){
//     console.log("Hello " + userName);
// }else{
//     console.log("Then what is your name?");
// }

// ---- example 2 ----
// let number = 99;

// if(number == 99){
//     console.log("The number is correct");
// }

// ---- example 3 ----

let num1 = prompt("Enter the number 1: ");
let num2 = prompt("Enter the number 2: ");
let num3 = prompt("Enter the number 3: ");
let notTrue = false;

if(num1 < num2 && num3 > num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1 == 1 || num2 == 1 || num3 == 1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("not not true is true!");
}

