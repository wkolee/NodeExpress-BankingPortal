const express = require('express');
const path = require('path');
const fs = require('fs');


//initailze the express object
const app = express();

app.use(express.static(path.join('__dirname', 'src', 'public')));
//set views 
app.set('views', path.join(__dirname, 'src', 'views'));
app.set("view engine", "ejs");




app.get('/', (req, res)=>{
    res.render('index.ejs', {title:'index'})
});

app.listen(3000, ()=>{
    console.log("PS Project Running on port 3000!")
});