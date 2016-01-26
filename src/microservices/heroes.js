module.exports = function heroes(options) {


  var db = require('../database/config.js');


  var Hero = db.Model.extend({
    tableName: 'heroes'
  });


  function resultToResponse(result, respond) {
    if (result === null) {
      respond(null, {});
    } else {
      respond(null, result.toJSON());
    }
  }


  this.add('role:heroes,cmd:all',function(msg, respond) {
    new Hero()
      .fetchAll()
      .then(function(result) {
        resultToResponse(result, respond);
      });
  });


  this.add('role:heroes,cmd:get',function(msg, respond) {
    msg.name = String(msg.name).valueOf();
    new Hero()
      .query({where: {name: msg.name}})
      .fetch()
      .then(function(result) {
        resultToResponse(result, respond);
      });
  });


}
