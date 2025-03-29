function factorial(n) {
    if (n < 0) {
        return "Invalid input"; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log(factorial(5)); // Output: 120


//2)EvenOrOdd
function isEvenOrOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(isEvenOrOdd(4)); // Output: Even
console.log(isEvenOrOdd(7)); // Output: Odd

//3)
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

//4)
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargest(10, 25, 15)); // Output: 25

//5)
function sumArray(arr) { return arr.reduce((sum, num) => sum + num, 0); }

 const numbers = [1, 2, 3, 4, 5]; console.log(sumArray(numbers)); // Output: 15

 //6)
 function rectangleProperties(length,width){
    const area = length * width;
    const perimeter = 2 * (length + width);
    return {area,perimeter};
 }
 const { area,perimeter} = rectangleProperties(8,6);
 console.log ("Area:",area)//output: 48
 console.log("perimeter:",perimeter);//output:28
 
//7)
function isLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
        return true;
    }
    return false;
}

console.log ("2024 is leap year:", isLeapYear(2024));
console.log ("2023 is leap year:", isLeapYear(2023));

//8)
function multiplicationTable(num){
    for (let i =1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);

    }
}
multiplicationTable(5);

//9)
function isPalindrome(str){
    let reversed = "" ;
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];

    }
    return str === reversed;
}

console.log("Is 'radar' a palindrome?",isPalindrome("radar"));

console.log("Is 'hello' a palindrome?",isPalindrome("hello"));

//10)
function gcd(a,b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log("GCD of 56 and 98:",gcd(56,98));
console.log("GCD of 12 and 15:",gcd(12,15));