'use strict';

const TrendingDay = require('../../models/TrendingDay');
const logger = require('../../utils/logger');

module.exports = (req, res, next) => {

    const query = TrendingDay.findOne({}).sort({ _id: -1 });
    const promise = query.exec();
    promise.then((trendingDay) => {
        res.send(200, trendingDay);
        return next();
    })
    .catch((err) => {
        res.send(500, err);
        return next();
    });
};
