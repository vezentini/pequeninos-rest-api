"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../entities/enums");
const interfaces_1 = require("../../entities/interfaces");
const accounts_1 = require("../accounts");
const findSummaries = async (input) => {
    let filter = {};
    if (input.profile === enums_1.ProfileTypes.PARENT) {
        filter = await (0, accounts_1.mapFilterStudents)(input);
    }
    const summariesDb = await interfaces_1.Summaries.find(Object.assign({}, filter));
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
