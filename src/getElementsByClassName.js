// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var target = className;
  var arrayLikeNodeObject = document.body.childNodes;
  var resultArray = [];

  var objTraverser = function(val, index, obj) {
    if ((val.classList !== undefined) && (target === val.classList[0])) { //look for matches
      resultArray.push(val);
    }
  };

  _.each(arrayLikeNodeObject, objTraverser); 

  return resultArray;

};
