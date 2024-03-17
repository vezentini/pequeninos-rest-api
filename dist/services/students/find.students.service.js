"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const enums_1 = require("../../entities/enums");
const interfaces_1 = require("../../entities/interfaces");
const accounts_1 = require("../accounts");
const findStudents = async (input) => {
    let filter = {};
    if (input.profile === enums_1.ProfileTypes.PARENT) {
        const listStudentsIds = await (0, accounts_1.mapFilterStudents)(input, true);
        if ((0, ramda_1.isEmpty)(listStudentsIds))
            return { students: [] };
        filter = { id: { $in: listStudentsIds } };
    }
    const studentsDb = await interfaces_1.Students.find(Object.assign({}, filter));
    const students = studentsDb.map((student) => ({
        id: student.id,
        name: student.name,
        gender: student.gender,
        classId: student.classId
    }));
    return { students };
};
exports.default = findStudents;
