"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const enums_1 = require("../../entities/enums");
const helper_1 = require("../../helper");
const ramda_1 = require("ramda");
const upsertAccount = async (input) => {
    let upsertObject = Object.assign(Object.assign({}, input), { profile: enums_1.ProfileTypes[input.profile] });
    if (!(0, ramda_1.is)(Number, upsertObject.id)) {
        upsertObject.id = (0, helper_1.generateNumberId)();
        console.log('gerou');
    }
    await interfaces_1.Accounts.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertAccount;
