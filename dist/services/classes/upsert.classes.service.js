"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const helper_1 = require("../../helper");
const upsertClass = async (input) => {
    let upsertObject = Object.assign({}, input);
    if (input.id === 0) {
        upsertObject.id = (0, helper_1.generateNumberId)();
    }
    await interfaces_1.Classes.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertClass;
