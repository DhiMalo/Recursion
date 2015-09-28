// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

var target = className;
//console.log(target); //targetClassName - successful.

var arrayOfBodyNodes = document.body.childNodes;
//console.log(arrayOfBodyNodes); // logs 13 correct nodes.

var objTraverser = function (val1, index, obj) {
  console.log(val1, index);
  _.filter(obj, function(val2, key, node){if (target === val2.className) {
    console.log(val2.className);
    console.log(val1);
    return val1;}
  });
};
var result = _.map(arrayOfBodyNodes, objTraverser); //use map to return object into the result array.
return result;

};
// Note: 
// DOM contains many many node objects embedded within one another and also note over 200 properties in each one
// every element is an object, but developer assumes that for this exercise they cannot be stringified and searched
