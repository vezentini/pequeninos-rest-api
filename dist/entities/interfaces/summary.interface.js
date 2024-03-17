"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summaries = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    mornningSnack: {
        type: String,
        required: true,
    },
    mornningSnackConsumn: {
        type: String,
        required: true,
    },
    luncheon: {
        type: String,
        required: true,
    },
    luncheonConsumn: {
        type: String,
        required: true,
    },
    afternoonSnack: {
        type: String,
        required: true,
    },
    afternoonSnackConsumn: {
        type: String,
        required: true,
    },
    preDinner: {
        type: String,
        required: true,
    },
    preDinnerConsumn: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Summaries = (0, mongoose_1.model)('summaries', schema);
