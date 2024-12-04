var addNumbers = function (a,b){
    var result = a + b;
    console.log("Sum = " + result);
    };
addNumbers(20,10);

// ------------- hosited up function statement-------

var x = add(10,20);
function add(a, b) {
return (a+b);
}
console.log("SUM = " +x);

// ---------function expression not hoisted------
//------arrow functions are not hoisted too-----

//----IIFE----
var z= (function (a,b) {
    return a+b;
   
    
    }
  )(2,2);
  console.log( "Sum of IIFE "+z);

  //----Closure----
  function compute() {
    var a=10; // local variable
    function display (){ // Closure
    a++;
    console.log("a = "+a);
    }
    return display;
    }
    var f1 = compute();
    f1();
    f1();
    f1();
    f1();

    //--Inheritance---
    function Vehicle(){}
        Vehicle.prototype.setSpeed = function(){console.log("The speed is 40kmph avg")}
    Vehicle.prototype.drive = function(){ console.log ('I am a driving my favourite red vehicle'); };

    
    
    
  
   function Car(){
    Car.prototype = new Vehicle();
    console.log(Car.prototype)
    // Car.prototype.setSpeed = function(){console.log("The speed is 80kmph max")}
    // Car.prototype.drive = function(){ console.log ('I am a driving my favourite red vehicle'); };
   }
//    var car= new Car();
//    car.setSpeed();
//    car.drive();
Car.setSpeed();