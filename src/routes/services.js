const express = require('express');
const data = require('../data');


const router = express.Router();

//get data
const { accounts, writeJSON } = data;


//transfer route
router.get('/transfer', (req, res)=>{
    res.render('transfer');
});

//transfer post route
router.post('/transfer', (req, res)=>{
 
    accounts[req.body.from].balance = parseInt(accounts[req.body.from].balance - req.body.amount);
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance + req.body.amount);
    
    const accountsJSON = JSON.stringify(accounts);
 
    writeJSON();
    res.render('transfer', {message: "Transfer Completed"});
});
//get payment
router.get('/payment', (req, res)=>{
    res.render('payment', {account: accounts.credit});
});

//post payment
router.post('/payment', (req, res)=>{
    accounts.credit.balance = parseInt(accounts.credit.balance - req.body.amount);
    accounts.credit.available = parseInt(req.body.amount + accounts.credit.available);

    writeJSON();
    res.render('payment', {message: "Payment Successful", account: accounts.credit});
});


module.exports = router;