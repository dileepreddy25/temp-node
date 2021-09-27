const names = require('./4-names') //getting REQUIRED properties from file 4-names and assigning them to a variable
const hi = require('./5-utils') //getting REQUIRED properties from file 5-utils and assigning them to a variable
const data = require('./6-alternative-export-methods')
require('./7-add')

hi(names.dileep)   //accessing properties from names and passing it to a function
hi(names.goutham)  //accessing properties from names and passing it to a function
hi('reddy')        // passing string directly to a function

console.log(data);