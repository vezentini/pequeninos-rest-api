"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findSelectionStudentes = async () => {
    const studentsDb = await interfaces_1.Students.find();
    const students = studentsDb.map((student) => (`${student.id} - ${student.name}`));
    return { students: students };
};
exports.default = findSelectionStudentes;
