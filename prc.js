var num = 10;
function addFive(num) { 
    return num+5;
}
var result = addFive(num)

var num = 5;
function getOpposite(num) {
    return Number.isInteger(num) ? num*-1 : -1;
}
var result = getOpposite(num);

var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)

var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr.length != 0 ? arr[0] : null;
}
var data = getFirstElement(arr);

var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return arr.forEach(element => {
       element*60*60; 
    });
}
var data = hourToSeconds(arr);

function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);

function lessThan100(num1,num2) {
    return num1+num2 < 100 ? true : false;
}
var res = lessThan100(22,15);

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3);

function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*2+pigs*2;
}
var legs = CountAnimals(2,3,5)

function frames(num1,num2) {
    return num1*num2*60;
}
var fps = frames(1,2)

function divisibleByFive(num1) {
    return num1%5 ? true : false ;
}
var divisible = divisibleByFive(5)

function isEven(num){
    return Number.isInteger(num) ? num%2 === 0 : -1;
   }
var even = isEven(5)

function areBothOdd(num1, num2){
    return (num1 % 2 != 0) && (num2 % 2 != 0) ;
}   

function getFullName(firstName, lastName){
    return firstName+lastName;
   }

   function getLengthOfWord(word1){
    return typeof word1 === "string" ?  word1.length : -1 ;
   }   
   getLengthOfWord("lat");

   function isSameLength(word1, word2){
    return word1.length===word2.length ;
   }

   
   function getDistance(x1, y1, x2, y2)
   {
     return Math.sqrt(Math.pow((y2-y1),2)+Math.pow((x2-x1),2));
   }   
   console.log(getDistance(100, 100, 400, 300));

   function getNthElement(array,n){
    return array[n];
   }

   function getLastElement(array){
    array[array.length-1];
   }

   var obj = {
    mykey: 'value'
   };
   function getProperty(obj, key) {
    return obj[key];
   }


   function addProperty(obj, key){
    obj[key]=true;
   }
   addProperty(obj,'key');

   function removeProperty(obj, key){
    delete obj.key;    
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    s=[0,0];
    arr.forEach(ele => {
        ele > 0 ? s[0]+=ele : s[1]+=ele;
    });
    return s;
}
console.log(ar2);

function getPositives(ar)
{
    return ar.filter(el => el > 0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

function powersOfTwo(n){
    ar=[];
    let i=0;
    while( i <= n){
    ar.push(Math.pow(2,i));
    i++;
    }
    return ar;
  }

  function findMax(ar)
  {
      ar.sort();
    return ar[ar.length-1];
  }
  var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  var max = findMax(ar);
  console.log('Max: ', max);  

  printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, ' → ', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    let i=1;
    let c=0;
    while( i <= n){
        if(n%i == 0){
            c=1;
            break;
        }
    i++;
    }
    return c===0 ? true : false;
}


console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var n = 0;
    var i = startAt+1;
    
    while(n < nPrimes)
    {
    if (isPrime(i))
    {
    console.log(n, ' → ', i);
    n++;
    }
    
    i++;
    }
}
// Returns true if a number is prime
function isPrime(n)
{
    let i=1;
    let c=0;
    while( i <= n){
        if(n%i == 0){
            c=1;
            break;
        }
    i++;
    }
    return c===0 ? true : false;
}

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 return result.concat(ar2); 
 
}


var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("");
}