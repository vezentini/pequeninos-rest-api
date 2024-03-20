"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const deleteStudent = async (id) => {
    await interfaces_1.Students.deleteOne({ id });
    return { success: true };
};
exports.default = deleteStudent;
