let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about me page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact us page. */
router.get('/contact', indexController.displayContactPage);

// GET Route for displaying the Login page
router.get('/login', indexController.displayLoginPage);

// POST Route for processing the Login page
router.post('/login', indexController.processLoginPage);

// GET to perform UserLogout
router.get('/logout', indexController.performLogout);

module.exports = router;