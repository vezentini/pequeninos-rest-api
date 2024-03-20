"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const updateClassStudents = async (classId, newClassId) => {
    const studentsDb = await interfaces_1.Students.updateMany({ classId }, { $set: { classId: newClassId } });
    console.log(studentsDb);
    return;
};
exports.default = updateClassStudents;
