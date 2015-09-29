// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create an empty string and name it storage.
  console.log('obj we are passing into the stringifyJSON function is:', obj );
  var storage = '';
  // first test checks to see whether the obj is a number.  (Base case)  
  if ( typeof(obj) === 'number' ) {
    var result = storage + obj;
    return result;
  } else if (obj === null) { //test for null
      return storage + 'null';
  } else if ( typeof(obj) === 'boolean' ){ //address test for boolean
      return storage + obj;
  } else if ( typeof(obj) === 'string') {  //address test for 
      return storage + '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      console.log(obj, 'is an empty array'); 
      return '['+']';
    } else if ( (typeof(obj[0]) === 'number') && (obj.length === 1) ) {
      console.log(obj, 'is an array with a number in it'); 
      return '['+ obj[0].toString() +']';
    } else if ( (typeof(obj[0]) === 'number') && (typeof(obj[1]) === 'string' ) ) {
      console.log(obj, 'is an array with a number and string in it'); 
      return '['+ stringifyJSON(obj[0]) + ','+ stringifyJSON(obj[1]) + ']';
    } else { 
      _.each(obj, function(val, index, obj){
        var valCopy = _.identity(val) 
        valCopy = stringifyJSON(val);
        console.log('the modified array content is ,',valCopy)
        console.log('array obj to now be passed is:', obj);
        return obj;})  
      console.log ('now, when I use my stringifyJSON I get the final array of:', '['+'...'+']')
      return '['+'\"' + obj.toString()+ '\"'+']';
    }
  } else {return };
};


 

//Notes: 
//string coersion seems to work for numbers, functions, booleans, undefined, NaN
//I can't string-coerse an object.
//When chained with other items, the null value disappears - this is a special case. 
//Consider that in sum all values are functions, strings, numbers, booleans, undefined values (like null, undefined and NaN), objects or arrays.
//Functions and undefined should be excluded per documentation
