"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const enums_1 = require("../../entities/enums");
const helper_1 = require("../../helper");
const upsertAccount = async (input) => {
    const accountDb = await interfaces_1.Accounts.findOne({ id: input.id });
    let upsertObject = Object.assign(Object.assign({}, input), { profile: enums_1.ProfileTypes[input.profile] });
    if (accountDb === null) {
        upsertObject.id = (0, helper_1.generateNumberId)();
        upsertObject.password = input.document;
    }
    else {
        upsertObject.password = accountDb.password;
        upsertObject.profile = accountDb.profile;
    }
    await interfaces_1.Accounts.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertAccount;
