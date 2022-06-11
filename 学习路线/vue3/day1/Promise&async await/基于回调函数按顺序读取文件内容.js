const fs = require('fs')
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', (err, datastr) => {
    console.log(err.message);
    console.log(datastr);
})