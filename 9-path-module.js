const path = require('path')

// finding the separator of the platform
console.log(path.sep);

// joining the path
const filePath = path.join('\content','subfolder','test.txt')
console.log(filePath);

// finding the base path
const basePath = path.basename(filePath)
console.log(basePath);

//used to get the path in different divices
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);