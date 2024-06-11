var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

   /*{const values =['rinshida','hasna','fasna']*/

    const person = {name :'Rinshida', comments:{comment:'hello dear',date:'12-04-24'},admin:false}

  res.render('about', {person});
});

module.exports = router;
