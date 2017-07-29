'use strict';

const TrendingDay = require('../../models/TrendingDay');
const logger = require('../../utils/logger');
const errors = require('../../utils/errors');

module.exports = (req, res, next) => {
    logger.trace('TrendingDay handler');

    TrendingDay.findOne({}).sort({ _id: -1 })
        .then((trendingDay) => {
            if (trendingDay) {
                const formattedResponse = formateTrendingDayResponse(trendingDay);
                res.send(200, formattedResponse);
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

function formateTrendingDayResponse(body) {
    logger.trace('formateTrendingDayResponse');

    return {
        data: body.date,
        repositories: body.repositories.map((repository) => {
            return {
                position: repository.position,
                namespace: repository.namespace,
                name: repository.name,
                language: repository.language,
                totalStars: repository.totalStars,
                starsToday: repository.starsToday,
                forks: repository.forks
            };
        })
    };
}
