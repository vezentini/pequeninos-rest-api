"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findStudents = async () => {
    const studentsDb = await interfaces_1.Students.find();
    const students = studentsDb.map((student) => ({
        id: student.id,
        name: student.name,
        gender: student.gender,
        classId: student.classId
    }));
    return { students };
};
exports.default = findStudents;
