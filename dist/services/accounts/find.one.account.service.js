"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findOneAccount = async (id) => {
    const accountDb = await interfaces_1.Accounts.findOne({ id });
    return {
        id: accountDb === null || accountDb === void 0 ? void 0 : accountDb.id,
        name: accountDb === null || accountDb === void 0 ? void 0 : accountDb.name,
        email: accountDb === null || accountDb === void 0 ? void 0 : accountDb.email,
        phone: accountDb === null || accountDb === void 0 ? void 0 : accountDb.phone,
        document: accountDb === null || accountDb === void 0 ? void 0 : accountDb.document,
        studentIds: accountDb === null || accountDb === void 0 ? void 0 : accountDb.studentIds,
        profile: accountDb === null || accountDb === void 0 ? void 0 : accountDb.profile,
    };
};
exports.default = findOneAccount;
