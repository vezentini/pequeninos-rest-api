"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFilterStudents = void 0;
const ramda_1 = require("ramda");
const interfaces_1 = require("../../entities/interfaces");
const mapFilterStudents = async (filter, mapId = false) => {
    const accountsDb = await interfaces_1.Accounts.findOne({ id: filter.accountId });
    if ((0, ramda_1.isEmpty)(accountsDb.studentIds))
        return [];
    return mapId === true ? accountsDb.studentIds.map((student) => Number(student.split('-')[0].trim())) :
        accountsDb.studentIds;
};
exports.mapFilterStudents = mapFilterStudents;
exports.default = exports.mapFilterStudents;
