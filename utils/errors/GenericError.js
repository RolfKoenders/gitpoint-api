'use strict';

function GenericError() {
    this.statusCode = 500;
    this.message = 'Something went wrong..';
    this.code = 'generic_error';

    this.body = {
        code: this.code,
        message: this.message
    };
}

GenericError.prototype = Object.create(Error.prototype);
module.exports = GenericError;
