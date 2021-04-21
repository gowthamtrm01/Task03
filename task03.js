// Print odd numbers in an array 

let arrayOne = [30, 23, 22, 45, 33, 56, 9, 11, 13];

const oddNumber = function(array) {
    let oddnumber = [];
    for(let odd of array){
        if(odd%2 !== 0){
            oddnumber.push(odd);
        }
    }
    return oddnumber;
}

console.log(oddNumber(arrayOne));



// Convert all the strings to title caps in a string array

(function(array){
    let uppercase = [];
    for(let string of array){
        uppercase.push(string.toUpperCase());
    }
    console.log(uppercase);
})(['gowtham', 'itachi', 'naruto', 'sasuke']);



// Sum of all numbers in an array 

let arrayTwo = [22, 37, 7, 6];

const sum = function(array) {
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    console.log(sum);
}

sum(arrayTwo);



// Return all the prime numbers in an array 

let arrayThree = [1, 2, 3, 4, 5, 7, 8, 9, 10];

const primeNumber = function(array) {
    let primenumber = [];
    primenumber = array.filter((number) => {
        for(i=2; i<=Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return true;
    })
    return primenumber;
}
console.log(primeNumber(arrayThree));



// Return all the palindromes in an array

let arrayFour = ['level', 'gowtham', 'madam', 'itachi'];

const palinDromes = function(array){
    let palindrome = [];
    palindrome = array.filter((string) => {
        let reverse = string.split('').reverse();
        if(string === reverse.join('')){
            return true;
        }else{
            return false;
        }
    })
    return palindrome;
}

console.log(palinDromes(arrayFour));



// Return median of two sorted arrays of same size

function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n){
            m1 = m2;
            m2 = ar2[0];
            break;
        }else if (j == n){
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j]){   
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }else{
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

let ar1 = [1, 12, 15, 26, 38];
let ar2 = [2, 13, 17, 30, 45];
let n1 = ar1.length;

console.log(getMedian(ar1, ar2, n1));



// Remove duplicates from an array

(function(array){
    let num = [...new Set(array)];
    console.log(num);
})([1, 2, 3, 4, 22, 4, 2, 22, 1, 37]);



// Rotate an array by k times and return the rotated array

const rotateArray = function(array, k) {
    let rotate;
    for(i=1; i<=k; i++){
        let value = array.shift();
        array.push(value);
        if(i === k){
            rotate = array;
        }
    }
    return rotate;
}

let  arrayFive = [1, 4, 7, 8, 9, 10]
console.log(rotateArray(arrayFive, 2));