"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const enums_1 = require("../../entities/enums");
const interfaces_1 = require("../../entities/interfaces");
const accounts_1 = require("../accounts");
const findSummaries = async (input) => {
    let filter = {};
    console.log(input.profile === enums_1.ProfileTypes.PARENT);
    if (input.profile === enums_1.ProfileTypes.PARENT) {
        console.log('entrou no if');
        const listStudentsIds = await (0, accounts_1.mapFilterStudents)(input);
        console.log(listStudentsIds);
        if ((0, ramda_1.isEmpty)(listStudentsIds))
            return { summaries: [] };
        filter = { studentId: { $in: listStudentsIds } };
    }
    const summariesDb = await interfaces_1.Summaries.find(Object.assign(Object.assign({}, filter), { date: input.date }));
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
