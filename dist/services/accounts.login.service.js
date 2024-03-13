"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../entities/interfaces");
const loginAccount = async (filter) => {
    if (!(filter === null || filter === void 0 ? void 0 : filter.email) || !(filter === null || filter === void 0 ? void 0 : filter.password))
        return { success: false, account: null };
    const accountDb = await interfaces_1.Accounts.findOne(Object.assign({}, filter));
    if (accountDb === null)
        return { success: false, account: null };
    return { success: true, account: accountDb };
};
exports.default = loginAccount;
