'use strict';

function NoTrendingDataError() {
    this.statusCode = 404;
    this.message = 'No trending data yet..';
    this.code = 'no_trending_data';

    this.body = {
        code: this.code,
        message: this.message
    };
}

NoTrendingDataError.prototype = Object.create(Error.prototype);
module.exports = NoTrendingDataError;
