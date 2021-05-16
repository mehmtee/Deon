const os = require('os');

sys_os = {}

sys_os.freemem = (type) => {
    if(type == "GB" | type == "gb") {
        return (os.freemem() / (1048576*1024));
    }
}


sys_os.totalmem = (type) => {

    if(type == "GB" | type == "gb") {
        return (os.totalmem() / (1048576*1024));
    }
    
}

sys_os.homedir = os.networkInterfaces();


module.exports =sys_os;