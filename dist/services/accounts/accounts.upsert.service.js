"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const enums_1 = require("../../entities/enums");
const helper_1 = require("../../helper");
const upsertAccount = async (input) => {
    let upsertObject = Object.assign(Object.assign({}, input), { profile: enums_1.ProfileTypes[input.profile] });
    if (upsertObject.id === 0) {
        upsertObject.id = (0, helper_1.generateNumberId)();
    }
    await interfaces_1.Accounts.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertAccount;
