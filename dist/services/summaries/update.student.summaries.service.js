"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const updateStudentSummaries = async (studentId, newStudentId) => {
    await interfaces_1.Summaries.updateMany({ studentId }, { $set: { studentId: newStudentId } });
    return;
};
exports.default = updateStudentSummaries;
