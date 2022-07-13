const os = require('os');

// Platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());


// Total memory
console.log(os.totalmem());

// Memory remaining in percentage
console.log((os.freemem() / os.totalmem * 100) + '%');

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime()/3600 + ' hours');