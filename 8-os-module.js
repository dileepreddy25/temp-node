// importing the inbuilt module OS
const os = require('os')

// info about current user
const user = os.userInfo() //method in OS module
console.log(user);

//method to find the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//get the useuful data about system os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);