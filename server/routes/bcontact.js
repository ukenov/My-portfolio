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

        res.render('bcontact/list', {title: 'Business Contacts', BcontactList: bcontactList});
    }
 });
})

// GET Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', (req, res, next) => {
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
});

// POST Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', (req, res, next) => {
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
});

// GET to perform Deletion - DELETE Operation
router.get('/delete/:id', (req, res, next) => {
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
});

module.exports = router;