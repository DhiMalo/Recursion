// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

var target = className;
//console.log(target); //targetClassName - successful.

var arrayLikeNodeObject = document.body.childNodes;
//console.log(arrayLikeNodeObject); // logs 13 correct nodes.

var resultArray = [];

var objTraverser = function (val, index, obj) {
  //console.log(val.classList, index, obj);
  //console.log('target is ', target, 'and val.classList is ', val.classList);
  if ( (val.classList !== undefined) && (target === val.classList[0]) ) {
    //console.log(val.classlist, 'is a match');
    resultArray.push(val);
  }
};

_.each(arrayLikeNodeObject, objTraverser); //use filter to return object into the result array.
console.log(resultArray);
return resultArray;

};
// Note: 
// DOM contains many many node objects embedded within one another and also note over 200 properties in each one
// every element is an object, but developer assumes that for this exercise they cannot be stringified and searched
