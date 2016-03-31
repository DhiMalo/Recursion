// This function is a from-scratch implementation of the work of JSON.stringify 
  // JSON.stringify breaks down complex values into strings so that they can be sent quickly via the web and re-assembled on the other side.  
  // Normally the function is used to "stringify" a JSON object but can be used for many data types. 

var stringifyJSON = function(obj) {

  var coerceString = '';

  if ((typeof(obj) === 'number') || (obj === null) || (typeof(obj) === 'boolean')) {
    var string = coerceString + obj;
    return string;

  } else if ((typeof(obj) === 'function') || (obj === undefined) || (obj === 'undefined' || obj === 'functions')) {
    return coerceString;

  } else if (typeof(obj) === 'string') {
    return coerceString + '\"' + obj + '\"';

  } else if (Array.isArray(obj)) {
      
    var resultsArray = [];
    _.each(obj, function(val, index, obj) {
      var valCopy = _.identity(val)
      valCopy = stringifyJSON(val); 
      resultsArray.push(valCopy);
    });
    return '[' + resultsArray.join() + ']';

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


