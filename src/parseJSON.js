// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //Convert stringified versions of number, string, boolean, null, to their respective types
  var type, output;


  if (json[0] === '[' && json[json.length -1] === ']') {
    type = 'array';
    output = [];
    // find some way to separate string into each array element
    // perform recursion on each element and push parsed element to output array
  }
  
  if (json[0] === '{' && json[json.length - 1] === '}') {
    type = 'object';
    output = {};
    // find some way to separate string into key-value pairs
    for (var i = 1; i < json.length-1; i++) {

    }
    // perform recursion 
  }

  // all other instances
  // if string
  if (json[0] === '"' && json[json.length - 1] === '"') {
    type = 'string';
    output = json.slice(1, json.length-1);
    // parse special characters?
  }
  

  // if boolean
  if (json === 'true' || json === 'false') {
    output = Boolean(json);
  }

  // if null
  // if undefined


  // if number
  if (json[0] === '-') {
    type = 'number';
    output = Number(json);
  }

  // if boolean

  // 

  return output;

  // var results = [];
  // for (var i = 0; i < json.length; i++) {
  //   if (json[i] !== '"') {
  //     results.push(json[i]);
  //   }
  // }
};
