var express = require('express');
var router = express.Router();
var data = [{
    name:'xiaoming',
    age:19,
    sex:'男'
  },
  {
    name:'xiaohong',
    age:18,
    sex:'女'
  }
]
/* GET users listing. */
router.get('/api', function(req, res, next) {
  // res.writeHead(200,{'Content-type':'applaction/json'})
  res.end(JSON.stringify(data));
});

module.exports = router;
