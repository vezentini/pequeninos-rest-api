"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const enums_1 = require("../../entities/enums");
const helper_1 = require("../../helper");
const ramda_1 = require("ramda");
const upsertAccount = async (input) => {
    console.log(input);
    const accountDb = await interfaces_1.Accounts.findOne({ id: input.id });
    let upsertObject = Object.assign({}, input);
    if (accountDb === null) {
        upsertObject.id = (0, helper_1.generateNumberId)();
        upsertObject.password = input.document;
        upsertObject.profile = enums_1.ProfileTypes[input.profile];
    }
    else {
        upsertObject.password = (0, ramda_1.isEmpty)(input.password) ? accountDb.password : input.password;
        upsertObject.profile = accountDb.profile;
    }
    await interfaces_1.Accounts.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertAccount;
