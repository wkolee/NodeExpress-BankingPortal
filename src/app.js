const fs = require('fs');
const path = require('path');
const express = require('express');
//initailze the express object
const app = express();
app.use(express.static(path.join('__dirname', 'public')));
//set views 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
//route
app.get('/', (req, res)=>{
    res.render('index.ejs', {title:'index'})
});
//server
app.listen(3000, ()=>{
    console.log("PS Project Running on port 3000!")
});