const express = require('express');
const app = express();
const port = 8081;
const path = require('path');

//For serving static files..
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG SPECIFIC
app.set("views engine ",'pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory

//Our pug endpoint 
app.get('/', (req ,res)=>{
    const params = { }
   res.status(200).render('index.pug');
   });

app.get('/contact', (req ,res)=>{
    const params = { }
   res.status(200).render('contact.pug');
   });
// start the server..
app.listen(port, () => {
    console.log(`The server is run... ${port}`);
})

