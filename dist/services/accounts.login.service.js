"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../entities/interfaces");
const loginAccount = async (filter) => {
    const accountDb = await interfaces_1.Accounts.findOne(Object.assign({}, filter));
    if (accountDb === null)
        return { success: false, account: null };
    return { success: true, account: accountDb };
};
exports.default = loginAccount;
