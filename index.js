'use strict';

const restify = require('restify');
const config = require('./config');

const pino = require('pino')({
    name: config.logger.name,
    level: config.logger.level
});

const server = restify.createServer({
  name: 'gitpoint-api'
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/health', function (req, res, next) {
  res.send(200, 'OK');
  return next();
});

server.listen(config.server.port, function () {
    pino.info(`Server is listening on port: ${config.server.port}`);
});
