"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../entities/interfaces");
const loginAccount = async (filter) => {
    const { email, password } = filter;
    if (!email || !password)
        return { success: false, account: null };
    const accountDb = await interfaces_1.Accounts.findOne({ email, password });
    if (accountDb === null)
        return { success: false, account: null };
    return { success: true, account: accountDb };
};
exports.default = loginAccount;
