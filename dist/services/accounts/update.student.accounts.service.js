"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const helper_1 = require("../../helper");
const updateStudentAccounts = async (oldAccountId, newAccountId) => {
    var _a;
    const accountsDb = (await interfaces_1.Accounts.find({ studentIds: oldAccountId }));
    if (accountsDb.length === 0)
        return;
    for (let i = 0; i < accountsDb.length; i++) {
        const studentIds = (0, helper_1.mapNewStudentsListIds)(accountsDb[i].studentIds, oldAccountId, newAccountId);
        await interfaces_1.Accounts.updateOne({ id: (_a = accountsDb[i]) === null || _a === void 0 ? void 0 : _a.id }, { $set: { studentIds } });
    }
    return;
};
exports.default = updateStudentAccounts;
