const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, datastr) => {
    if (err) return console.log('文件读入失败！' + err.message);

    resolveCSS(datastr)
    resolveJS(datastr)
    resolveHTML(datastr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) return console.log('CSS样式文件写入失败！');
        console.log('CSS样式文件写入成功！');
    })
}
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err => {
        if (err) return console.log('js脚本写入失败！' + err.message);
        console.log('js脚本写入成功！');
    })
}
function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
        if (err) return console.log('html 文件写入失败！');
        console.log('html 文件写入成功！');
    })
}

