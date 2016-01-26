var seneca = require('seneca');

// Microservice server process
seneca
  .use('heroes')
  .use('nonsense')
  .listen();
