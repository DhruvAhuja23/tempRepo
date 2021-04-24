const os=require('os');
const user = os.userInfo()
console.log(`system uptime is ${os.uptime}`);
console.log(user);
const current={
    curos:os.release(),
    name:os.type(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(current);