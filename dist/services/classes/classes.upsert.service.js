"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const interfaces_1 = require("../../entities/interfaces");
const upsertClass = async (input) => {
    let upsertObject = Object.assign({}, input);
    if (input.id === '') {
        upsertObject.id = (0, uuid_1.v4)();
    }
    await interfaces_1.Classes.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertClass;