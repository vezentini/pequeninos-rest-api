"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const deleteStudent = async (input) => {
    await interfaces_1.Students.deleteOne({ id: input.id });
    return true;
};
exports.default = deleteStudent;
