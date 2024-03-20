"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const updateStudentSummaries = async (studentId, newStudentId) => {
    const summariesDb = await interfaces_1.Summaries.updateMany({ studentId }, { $set: { studentId: newStudentId } });
    console.log(summariesDb);
    return;
};
exports.default = updateStudentSummaries;
