//simple backend http server in node js
const express = require("express");//just to install express library this line , after vwriting npm install express ; command in console it will install express bring from internet to ur locsl machine  

const port = 3000 // u have created http server that is on port 3000
const app =express();// app is an obj , express() is a fn that returned value from fn express store in app 
// 7th line code similar to fs.readFile("path","utf-7",())
app.get('/', function(req, res)  { // using app object we do .get func , .listen
  res.send('Hello World!') // anyone who tries to hit ur backend server control will reach here callback func
})

app.listen(port)
 