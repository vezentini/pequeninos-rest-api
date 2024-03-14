"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findSummaries = async () => {
    const summariesDb = await interfaces_1.Summaries.find();
    const summaries = summariesDb.map((summary) => {
        return ({
            id: summary.id,
            date: summary.date,
            studentId: summary.studentId,
            mornningSnack: summary.mornningSnack,
            mornningSnackConsumn: summary.mornningSnackConsumn,
            luncheon: summary.luncheon,
            luncheonConsumn: summary.luncheonConsumn,
            afternoonSnack: summary.afternoonSnack,
            afternoonSnackConsumn: summary.afternoonSnackConsumn,
            preDinner: summary.preDinner,
            preDinnerConsumn: summary.preDinnerConsumn,
            description: summary.description,
        });
    });
    return { summaries };
};
exports.default = findSummaries;
