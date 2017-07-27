'use strict';

module.exports = (req, res, next) => {
    res.send(200, 'OK');
    return next();
};
