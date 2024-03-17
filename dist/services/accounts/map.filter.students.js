"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFilterStudents = void 0;
const interfaces_1 = require("../../entities/interfaces");
const mapFilterStudents = async (filter) => {
    const accountsDb = await interfaces_1.Accounts.findOne({ id: filter.accountId });
    const listStudents = accountsDb.studentIds.map((student) => student.split('-')[0].trim());
    return listStudents;
};
exports.mapFilterStudents = mapFilterStudents;
exports.default = exports.mapFilterStudents;
