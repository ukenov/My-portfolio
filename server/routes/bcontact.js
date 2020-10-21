let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business Contact Model
let Bcontact = require('../models/bcontact');

// GET Route for the Business Contacts List -READ Operation
router.get('/', (req, res, next) => {
 Bcontact.find((err, bcontactList) => {
    if(err)
    {
        return console.error(err);
    }
    else 
    {
        //console.log(BcontactList);

        res.render('business_contacts', {title: 'Business Contacts', BcontactList: bcontactList});
    }
 });
})

module.exports = router;