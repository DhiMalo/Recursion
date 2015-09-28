// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create an empty string and name it storage.
  console.log('obj we are passing into the stringifyJSON function is:', obj );
  var storage = '';
  // first test checks to see whether the argument is a number.  (Base case)  
  if ( typeof(obj) === 'number' ) {
    var result = storage + obj;
    return result;
  } else if (obj === null) { //test for null
      return storage + 'null';
  } else if ( typeof(obj) === 'boolean' ){ //address test for boolean
      return storage + obj;
  } else if ( typeof(obj) === 'string') {  //address test for string
      return storage + '\"' + obj + '\"';
  } else if (Array.isArray(obj)) { //address test for (1) empty arrays then (2) arrays with a length
    if (obj[0] === undefined) {
      console.log('this thing, ', obj, 'is an empty array'); 
      return '['+']';
    } else { 
      var newArray = _.map(obj, function(val, index, obj){
        val = stringifyJSON(val);
        console.log('the modified array content is ,',val)
        console.log('array obj to now be passed is:', obj);
        return obj;})  
      console.log ('now, when I use my stringifyJSON I get the final array of:', '['+newArray.toString()+']')
      return '['+'\"' + obj.toString()+ '\"'+']';
    }
  } else {return };
};


 

//Notes: 
//string coersion seems to work for numbers, functions, booleans, undefined, NaN
//I can't string-coerse an object.
//When chained with other items, the null value disappears. 
//Consider that in sum all values are functions, strings, numbers, booleans, undefined values (like null, undefined and NaN), objects or arrays.
