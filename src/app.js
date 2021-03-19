const fs = require('fs');
const path = require('path');
const express = require('express');
const data = require('./data');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

//initailze the express object
const app = express();



//set views 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//middleware 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));



//data
const {accounts, users, writeJSON} = data;

//route
app.get('/', (req, res)=>{
    //console.log(accounts.savings)
    res.render('index', {title:'Account Summary', accounts: accounts})
});


//profile route
app.get('/profile', (req, res)=>{
    //console.log(accounts.checking)
    res.render('profile', {user: users[0]});
});




app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);
//server
app.listen(3000, ()=>{
    console.log("PS Project Running on port 3000!")
});