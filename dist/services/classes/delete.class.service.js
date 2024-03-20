"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const deleteClass = async (id) => {
    await interfaces_1.Classes.deleteOne({ id });
    return { success: true };
};
exports.default = deleteClass;
