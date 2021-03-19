const fs = require('fs');
const path = require('path');


//read file
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
//parse json object
const accounts = JSON.parse(accountData);


//read users file 
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
//parse object
const users = JSON.parse(userData);

const writeJSON = ()=>{

    const accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), accountsJSON, "utf8");
}

module.exports = {
    accounts,
    users,
    writeJSON
}