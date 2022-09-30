const express = require('express');//require() is a built-in Node function that lets you gain access to another Node file’s code.
//import of the npm package express to this file, that dependency exports an app object 
const app = express();//express() creates an Express application. It is the main entry point to the Express framework.
//Declaration of app ? run the dependency imported in the line above it. 
//The app object that holds the Express code.
const port = 5000;//port number declared

//GET requests (and several others) are built in to Express and present as methods in the app object.
app.get('/', (req, res) => { //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname}); });//server responds by sending the index.html file to the client's browser
//It takes two arguments, req=path and res=callback function. eq and res. These are built-in objects that Express passes to the callback function.
//res.sendFile('<file-name>', {root: __dirname});
//Send a file from the same folder (the root) that your server file (index.js) is in.

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 