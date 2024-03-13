"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const ramda_1 = require("ramda");
const findAccounts = async (input) => {
    let filter = (0, ramda_1.isEmpty)(input === null || input === void 0 ? void 0 : input.id) ? {} : { id: input.id };
    const accountDb = await interfaces_1.Accounts.find(filter);
    return accountDb.map((account) => ({
        id: account.id,
        name: account.name,
        email: account.email,
        phone: account.phone,
        document: account.document,
        studentIds: account.studentIds,
        profile: account.profile,
    }));
};
exports.default = findAccounts;
