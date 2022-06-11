import fs from 'then-fs'

function getFile(fpath) {
    //返回一个Promise实例node对象
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf8', (err, datastr) => {
            if (err) return reject(err)
            resolve(datastr)
        })
    })
}

getFile('./files/1.txt')
    .then((r1) => { console.log(r1); })
    .catch((err) => { console.log(err.message); })

//reject 是用来抛出异常的，catch是用来处理异常的
//reject是promise的方法，catch是promise实例的方法