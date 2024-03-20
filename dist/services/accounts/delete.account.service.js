"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const deleteAccount = async (id) => {
    await interfaces_1.Accounts.deleteOne({ id });
    return { success: true };
};
exports.default = deleteAccount;
