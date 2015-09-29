// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  // create an empty string and name it storage.
  console.log('obj we are passing into the stringifyJSON function is:', obj);
  var storage = '';
  
  if ((typeof(obj) === 'number') || (obj === null) || (typeof(obj) === 'boolean')) {
    var result = storage + obj;
    return result;

  } else if (typeof(obj) === 'string') { 
    return storage + '\"' + obj + '\"';

  } else if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      console.log(obj, 'is an empty array');
      return '[' + ']';

    } else if ((typeof(obj[0]) === 'number') && (obj.length === 1)) {
      console.log(obj, 'is an array with a number in it');
      return '[' + obj[0].toString() + ']';

    } else if ((typeof(obj[0]) === 'string') && (obj.length === 1)) {
      console.log(obj, 'is an array with a string in it');
      return '[' + '\"' + obj[0].toString() + '\"' + ']';

    } else if ((typeof(obj[0]) === 'number') && (typeof(obj[1]) === 'string')) {
      //console.log(obj, 'is an array with a number and string in it');
      return '[' + stringifyJSON(obj[0]) + ',' + stringifyJSON(obj[1]) + ']';
    } else {
      var resultsArray = [];
      _.each(obj, function(val, index, obj) {
        var valCopy = _.identity(val)
        valCopy = stringifyJSON(val); //successfully uses recursion
        //console.log('the modified array content is ', valCopy)
        resultsArray.push(valCopy);
      })
      return '[' + resultsArray.join() + ']';
    }
  } else {
      var resultsArray2 = [];
      _.each(obj, function(val, key, obj) {
        var valCopy2 = _.identity(val)
        valCopy2 = stringifyJSON(val); 
        var keyCopy = _.identity(key);
        keyCopy = stringifyJSON(key);
        resultsArray2.push(keyCopy+':'+valCopy2);
      })
      return '{' + resultsArray2.join() + '}';
  };
};




//Notes: 
//string coersion seems to work for numbers, functions, booleans, undefined, NaN
//I can't string-coerse an object.
//When chained with other items, the null value disappears - this is a special case. 
//Consider that in sum all values are functions, strings, numbers, booleans, undefined values (like null, undefined and NaN), objects or arrays.
//Functions and undefined should be excluded per documentation
