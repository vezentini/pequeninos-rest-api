"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const upsertAccount = async (input) => {
    await interfaces_1.Accounts.deleteOne({ id: input.id });
    return true;
};
exports.default = upsertAccount;
