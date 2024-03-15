"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findAccounts = async (input) => {
    let filter = (input === null || input === void 0 ? void 0 : input.id) === 0 ? {} : { id: input.id };
    const accountDb = await interfaces_1.Accounts.find(filter);
    const accounts = accountDb.map((account) => ({
        id: account.id,
        name: account.name,
        email: account.email,
        phone: account.phone,
        document: account.document,
        studentIds: account.studentIds,
        profile: account.profile,
    }));
    return { accounts };
};
exports.default = findAccounts;
