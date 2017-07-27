'use strict';

const mongoose = require('mongoose');

const config = require('../config');
const logger = require('./logger');

const options = {
    promiseLibrary: require('bluebird'),
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE
};
const uri = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`;
const db = mongoose.createConnection(uri, options);

db.on('error', (error) => {
    logger.error(error, 'Error while opening connection to Mongo');
});

module.exports = db;
