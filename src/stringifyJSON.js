// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (typeof obj === 'function' || obj === undefined)  {
    return '{}';
  }
  if ((typeof obj === 'number' && isNaN(obj)) || (obj === Infinity || undefined)) {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return '' + obj;
  }
  if (obj.length === 0) {
    return '[]';
  }
     
    //input is array
  if (Array.isArray(obj)) {
    var newArr = [];
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number' || typeof obj[i] ==='boolean') {
        newArr.push(obj[i]);
      } else {
        newArr.push(stringifyJSON(obj[i])) //check each ele and return value   
      }           
    }
    return `[${newArr}]`;
  }
    
   //input is obj
  var key;
  var value;
  if (typeof obj === 'object') {  
  var newObj = [];   
    for (var k in obj) { 
      if (typeof obj[k] === 'function' || obj[k] === undefined) {
        delete obj[k];
      }
      if ((!Object.keys(obj).length) ) {
        return '{}';
      }           
      key = `"${k}":`;
      value = `${stringifyJSON(obj[k])}` ;
      newObj.push(key + value);
    }  
    return `{${newObj}}`;    
  }            
};


