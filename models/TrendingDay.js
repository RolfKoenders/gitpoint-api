'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrendingDay = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    repositories: [{
        position: Number,
        namespace: String,
        name: String,
        language: String,
        totalStars: Number,
        starsToday: Number,
        forks: Number
    }]
});

module.exports = mongoose.model('TrendingDay', TrendingDay);
