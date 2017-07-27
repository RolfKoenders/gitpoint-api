'use strict';

const config = require('../config');

const pino = require('pino')({
    name: config.logger.name,
    level: config.logger.level
});

module.exports = pino;
