var express = require('express');
var seneca = require('seneca');
var app = express();


app.get('/api', function(req, res){

  var role = req.query.role;
  var cmd = req.query.cmd;
  var params = req.query.params;
  var pattern = 'role:'+role+',cmd:'+cmd;

  if (params)
    pattern += ','+params;

  seneca().client()
    .act(pattern, function(error, value){
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(value);
      }
    });

});


app.use(express.static('dist/'));


app.listen(3000, function () {
  console.log('Listening on port 3000..');
});
