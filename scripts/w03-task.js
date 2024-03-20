/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2) {
    return num1 + num2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value)
    let addNumber2 = Number(document.querySelector("#add2").value)
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(num1, num2) {
    return num1 - num2;
}
function subtractNumbers() {
    //Input variable
    let subNumber1 = Number(document.querySelector("#subtract1").value)
    let subNumber2 = Number(document.querySelector("#subtract2").value)
    document.querySelector("#subtractNumbers").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#difference").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => num1 * num2;
let multiplyNumbers = () => {
    let mulNumber1 = Number(document.querySelector("#factor1").value)
    let mulNumber2 = Number(document.querySelector("#factor2").value)
    document.querySelector("#multiplyNumbers").value = multiply(mulNumber1, mulNumber2);
}
document.querySelector("#product").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let Divide = (num1, num2) => num1 / num2;

let divideNumbers = () => {
    let divNumber1 = Number(document.querySelectorAll("#dividend").value)
    let divNumber2 = Number(document.querySelector("#divisor").value)
    document.querySelector("#divideNumbers").value = Divide(divNumber1, divNumber2);
}
document.querySelector("#quotient".addEventListener("click", divideNumbers))

/* Decision Structure */
let subTotalAmount = Number(document.querySelector("#subTotal").value)
let discount = () => {
    if (document.getElementById("member").checked) {
        subTotalAmount = subTotalAmount - (subTotalAmount * 0.2)
        return subTotalAmount;
    }
    else {
        return subTotalAmount;
    }
}
let GetTotalDue = () => {
    document.querySelector("#Gettotal").value = discount();
}
document.querySelector("#total".addEventListener("click", GetTotalDue))


/* ARRAY METHODS - Functional Programming */



/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let arrayElement = document.getElementById("array")
arrayElement.textContent = numbersArray.join(", ");

/* Output Odds Only Array */

/* let oddNumbers = numbersArray.filter(function(number){
    return number % 2 !== 0; 
}) 
let oddsElement = document.getElementById("odds");
oddsElement.textContent = oddNumbers.join(", "); */
 

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);  

/* Output Sum of Multiplied by 2 Array */
let multipliedNumbers = numbersArray.map(number => number * 2);
let sumOfMultiplied =  multipliedNumbers.reduce((sum, number) => sum + number);
let sumOfMultipliedElement = document.querySelector("#sumOfMultiplied");
sumOfMultipliedElement.textContent = `${sumOfMultiplied}`; 
