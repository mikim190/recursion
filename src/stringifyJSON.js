// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {

  if (typeof obj === "string") {
    return `"${obj}"`;
    // var splitString = obj.split('');
    // splitString.unshift('"')
    // splitString.push('"')
    // return splitString.join('');
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === "boolean") {
    return '' + obj;
  }
  if (typeof obj === 'function' || obj === undefined) {
    return '{}';
  }
  if (obj.length === 0) {
    return '[]';
  }


  var newArr = [];
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number' || typeof obj[i] === 'boolean') {
        newArr.push(obj[i]);
      } else {
        newArr.push(stringifyJSON(obj[i]));
      }
    }
    return `[${newArr}]`;

  }

  // if (typeof obj === 'object') {
  //   if (Object.keys(obj).length === 0) {
  //     return '{}';
  //   }

  //   var objResult = [];
  //   for (var key in obj) {  //{a: {b:c}}
  //     var newKey = `"${key}"`;
  //     var value = obj[key];

  //     if (typeof value === 'number' || typeof value === 'boolean') {
  //       objResult.push(newKey + ':' + value);
  //     }
  //     if (typeof value === 'function' || value === 'undefined') {
  //       delete value;
  //     }
  //     objResult.push(newKey + ':' + stringifyJSON(value));

  //   }

  //   objResult = objResult.join(',');

  //   return `{${objResult}}`;
  // }


