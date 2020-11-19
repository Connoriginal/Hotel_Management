var express = require('express');
var router = express.Router();

// chanwoong routing
router.get('/', function(req, res, next) {
    res.render('chanwoong/index', { 
      title: 'Home' , 
      cust_info:null
    });
});

router.get('/room', function(req, res, next) {
  res.render('../views/chanwoong/room', { title: 'Room' , cust_info:null});
});


module.exports = router;