'use strict';

const restify = require('restify');

const config = require('./config');
const services = require('./services');
const logger = require('./utils/logger');
const mongo = require('./utils/mongo');

// Restify server setup
const server = restify.createServer({
    name: 'gitpoint-api'
});
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Health endpoint
server.get('/health', services.health);

// Trending endpoint
server.get('/trending/today', services.trending);

mongo.once('open', () => {
    server.listen(config.server.port, function () {
        logger.info(`Server is listening on port: ${config.server.port}`);
    });
});
