"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const interfaces_1 = require("../../entities/interfaces");
const enums_1 = require("../../entities/enums");
const upsertAccount = async (input) => {
    let upsertObject = Object.assign(Object.assign({}, input), { profile: enums_1.ProfileTypes[input.profile] });
    if (input.id === '') {
        upsertObject.id = (0, uuid_1.v4)();
    }
    await interfaces_1.Classes.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertAccount;
