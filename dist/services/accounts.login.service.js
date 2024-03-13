"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../entities/interfaces");
const loginAccount = async (filter) => {
    const accountDb = await interfaces_1.Accounts.findOne(filter).exec();
    const success = (accountDb === null || accountDb === void 0 ? void 0 : accountDb.id) !== null && (accountDb === null || accountDb === void 0 ? void 0 : accountDb.id) !== "" ? true : false;
    return { success, account: accountDb };
};
exports.default = loginAccount;
