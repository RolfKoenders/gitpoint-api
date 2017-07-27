'use strict';

const convict = require('convict');

const configSchema = convict({
    logger: {
        name: {
            doc: 'Name of the logger',
            format: String,
            default: 'API',
            env: 'LOGGER_NAME'
        },
        level: {
            doc: 'Level to log',
            format: String,
            default: 'trace',
            env: 'LOGGER_LEVEL'
        }
    },
    mongo: {
        host: {
            doc: 'MongoDB host',
            format: String,
            default: null,
            env: 'MONGODB_HOST'
        },
        port: {
            doc: 'MongoDB port',
            format: 'port',
            default: 27017,
            env: 'MONGODB_PORT'
        },
        database: {
            doc: 'MongoDB database',
            format: String,
            default: 'gitpoint',
            env: 'MONGODB_DB'
        }
    },
    server: {
        port: {
            doc: 'Port to listen on',
            format: String,
            default: 9090,
            env: 'HTTP_PORT'
        }
    }
});

const config = configSchema.getProperties();
module.exports = config;
