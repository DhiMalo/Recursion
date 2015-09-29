// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  var coerceString = '';

  if ((typeof(obj) === 'number') || (obj === null) || (typeof(obj) === 'boolean')) {
    var result = coerceString + obj;
    return result;

  } else if ((typeof(obj) === 'function') || (obj === undefined) || (obj === 'undefined' || obj === 'functions')) {
    return coerceString;

  } else if (typeof(obj) === 'string') {
    return coerceString + '\"' + obj + '\"';

  } else if (Array.isArray(obj)) {
    
    if (obj[0] === undefined) {
      //console.log(obj, 'is an empty array');
      return '[' + ']';

    } else if ((typeof(obj[0]) === 'number') && (obj.length === 1)) {
      //console.log(obj, 'is an array with a number in it');
      return '[' + obj[0].toString() + ']';

    } else if ((typeof(obj[0]) === 'string') && (obj.length === 1)) {
      //console.log(obj, 'is an array with a string in it');
      return '[' + '\"' + obj[0].toString() + '\"' + ']';

    } else if ((typeof(obj[0]) === 'number') && (typeof(obj[1]) === 'string')) {
      return '[' + stringifyJSON(obj[0]) + ',' + stringifyJSON(obj[1]) + ']';
      
    } else {
      var resultsArray = [];
      _.each(obj, function(val, index, obj) {
        var valCopy = _.identity(val)
        valCopy = stringifyJSON(val); 
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
      resultsArray2.push(keyCopy + ':' + valCopy2);
    })
    return '{' + resultsArray2.join() + '}';
  };
};
