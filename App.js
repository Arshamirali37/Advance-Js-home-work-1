// Home Work #1

// Q1
const name = "ARSH"
let email = "arshamirali37@gmail.com"
const city = "karachi"
let education = "Alevels"
const occupation = "Student"
let phonenumber = "03330226123"
const insitution = "JawanPakistan"

document.write(`
Name:${name} <br>
Email:${email} <br>
City: ${city} <br>
Education: ${education} <br>
Occupation: ${occupation} <br>
PhoneNumber: ${phonenumber} <br>
Institute Name: ${insitution}`)


// Q2
// Global Scope:-
const FirstName = "Arsh"
console.log(FirstName)
{
    const FirstName = "Amirali"
    console.log(FirstName)
}

// Function Scope: -
function abc() {
    const a = 10
    console.log(a)
}
abc()

// Hositing 

console.log(num)
var num = 20


// function
abc()
function abc() {
    console.log('hello user')
}

console.log(num);
let num = 50

// constant
console.log(num);
const num = 50


fun()
var fun = function () {
    console.log("Hello User")
}


console.log(fun)
var fun = function () {
    console.log("Hello User")
}
