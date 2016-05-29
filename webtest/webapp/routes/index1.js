var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/:key', function(req, res) {
  var para1=req.query.num1;
  var para2=req.query.num2;
  var result=add(parseInt(para1),parseInt(para2));
  res.render('index', { title: 'Express',result:result });
});

function add(id,id_1){
 return id*id_1
}
module.exports = router;
