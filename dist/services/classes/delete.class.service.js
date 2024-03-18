"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const deleteClass = async (input) => {
    await interfaces_1.Classes.deleteOne({ id: input.id });
    return true;
};
exports.default = deleteClass;
