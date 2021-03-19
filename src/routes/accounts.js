const express = require('express');
const data = require('../data');


const router = express.Router();



//get data
const { accounts } = data;



//saving route
router.get('/savings', (req, res)=>{
    res.render('account', {account: accounts.savings});
});
//checking route
router.get('/checking', (req, res)=>{
    res.render('account', {account: accounts.checking});
});
//credit route
router.get('/credit', (req, res)=>{
    //console.log(accounts.checking)
    res.render('account', {account: accounts.credit});
});


module.exports = router;