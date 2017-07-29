'use strict';

const TrendingDay = require('../../models/TrendingDay');
const logger = require('../../utils/logger');
const errors = require('../../utils/errors');

module.exports = (req, res, next) => {
    TrendingDay.findOne({}).sort({ _id: -1 })
        .then((trendingDay) => {
            if (trendingDay) {
                res.send(200, formateResponse(trendingDay));
                return next();
            } else {
                throw new errors.NoTrendingDataError();
            }
        })
        .catch((error) => {
            logger.error(error, 'Trending handler catch');

            if (!error.body) {
                error = new errors.GenericError();
            }

            res.send(error.statusCode, error.body);
            return next();
        });
};

function formateResponse(trendingDay) {
    return trendingDay;
}
