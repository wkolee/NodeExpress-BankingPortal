const fs = require('fs');
const path = require('path');
const express = require('express');

//initailze the express object
const app = express();



//set views 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//static views
app.use(express.static(path.join(__dirname, 'public')));

//read file
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), {encoding:'utf8'});
//parse json object
const accounts = JSON.parse(accountData);

//read users file 
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), {encoding:'utf8'});
//parse object
const users = JSON.parse(userData);

//route
app.get('/', (req, res)=>{
    console.log(accounts.savings)
    res.render('index', {title:'Account Summary', accounts: accounts})
});

//saving route
app.get('/savings', (req, res)=>{
    res.render('account', {account: accounts.savings});
});

//checking route
app.get('/checking', (req, res)=>{
    res.render('account', {account: accounts.checking});
});

//credit route
app.get('/credit', (req, res)=>{
    console.log(accounts.checking)
    res.render('credit', {account: accounts.credit});
});

//profile route
app.get('/profile', (req, res)=>{
    //console.log(accounts.checking)
    console.log(users[0])
    res.render('profile', {user: users[0]});
});


//server
app.listen(3000, ()=>{
    console.log("PS Project Running on port 3000!")
});