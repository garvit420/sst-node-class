const fs = require('fs');
const path = require('path');

const http = require('http');
const url = require("url");

const indexHtml = fs.readFileSync('index.html');
const loginHtml = fs.readFileSync('login.html');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if(pathname == "/login"){
        res.write(loginHtml + "")
    }
    else {
        res.write(indexHtml + "")
    }
    res.end();  
})


const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log('listening to port 3000');
})

// const data = fs.readFileSync('file.txt');
// const p = "C:\Users\garvi\OneDrive - Scaler School of Technology\Desktop\sst\DEV_Trim4\class node\classes\file.txt";
// console.log(data + "");

// const dirname = path.dirname("dir1");
// const extention = path.extname(p);

// const oldPath = path.resolve('file.txt');
// const newPath = path.join(path.resolve('dir1') , 'file.txt');

// fs.copyFile(oldPath, newPath, (err) =>{
//     if(err) console.log(err);
//     console.log("path changed");
// })

// console.log(dirname + ' ' + extention);

// fs.mkdir('dir1', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir created');
// });

// fs.rmdir('dir1', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir removed');
// });

// fs.appendFile('file.txt', 'Hello world', 'UTF-8', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// data = fs.readFileSync('file.txt');

// console.log(data + '');