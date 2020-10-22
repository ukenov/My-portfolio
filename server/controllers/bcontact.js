let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Bcontact = require('../models/bcontact');

module.exports.displayBcontactList = (req, res, next) => {
    Bcontact.find((err, bcontactList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            //console.log(BcontactList);

            res.render('bcontact/list', {title: 'Business Contacts', BcontactList: bcontactList});
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Bcontact.findById(id, (err, contactToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // show the edit view
            res.render('bcontact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    })
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Bcontact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Bcontact.updateOne({_id:id}, updatedContact, (err) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the business contact list
            res.redirect('/bcontact-list');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Bcontact.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the business contact list
            res.redirect('/bcontact-list');
        }
    });
};