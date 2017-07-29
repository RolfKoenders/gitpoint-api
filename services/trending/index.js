'use strict';

const TrendingDay = require('../../models/TrendingDay');
const logger = require('../../utils/logger');

module.exports = (req, res, next) => {
    TrendingDay.findOne({}).sort({ _id: -1 })
        .then((trendingDay) => {
            res.send(200, formateResponse(trendingDay));
            return next();
        })
        .catch((err) => {
            res.send(500, {
                code: 'generic_error',
                message: 'Something went wrong.'
            });
            return next();
        });
};

function formateResponse(trendingDay) {
    return trendingDay;
}
