var myVariable = "This is a variable!";

var number1 = 3 ;
number1 = 3 ;
number2 = number1 + 5 ; // 3 + 5 = 8
number3 = number2 - 6 ; // 8 - 6 = 2
var number4 = number3 * 10 ; // 2 * 10 = 20
var number5 = number4 / number3; // 20 / 2 = 10
var myString = "I am a " + "string!" ; // "I am a string!"
console.log(number5); // 10
window.alert(number5); // 10
console.log(myString); // 10
window.alert(myString); // 10


var myInteger = 12 ;
var myLong = 9310141419482 ;
var myFloat = 5.5 ;
var myDouble = 9310141419482.22 ;
var myBoolean = true ;
var myBoolean2 = false ;
var myNotANumber = NaN ;
var NaN_Example = 0 / 0 ; // NaN
var notDefined;
var aRandomVariable;
window.alert(aRandomVariable); // undefined
console.log(aRandomVariable); // undefined
var myNull = null

var myArray = [];
var favoriteFruits = [ "apple", "orange", "strawberry" ];
var carsInParkingLot = [ "Toyota", "Ferrari", "Lexus" ];
var employees = [ "Billy", "Bob", "Joe" ];
var primeNumbers = [ 2, 3, 5, 7, 11, 13 ];
var randomVariables = [ 2, "any type works", undefined, null, true, 2.51 ];
myArray = [ "zero", "one", "two" ];
window.alert(myArray[0]); // "zero"
var elementNumber = 1;
window.alert(myArray[elementNumber]); // "one"

var john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
var billy = { firstname: "Billy", lastname: undefined, fullname: "Billy" };
window.alert(john.fullname); // John Doe
window.alert(billy.firstname); // Billy
console.log(john.fullname); // John Doe
console.log(billy.firstname); // Billy