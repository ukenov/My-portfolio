let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bcontactController = require('../controllers/bcontact')

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// GET Route for the Business Contacts List -READ Operation
router.get('/', requireAuth, bcontactController.displayBcontactList)

// GET Route for displaying the Update page - READ Operation
router.get('/update/:id', requireAuth, bcontactController.displayUpdatePage);

// POST Route for processing the Update page - UPDATE Operation
router.post('/update/:id', requireAuth, bcontactController.processUpdatePage);

// GET to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, bcontactController.performDelete);

module.exports = router;