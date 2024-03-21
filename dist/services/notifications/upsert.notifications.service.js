"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const uuid_1 = require("uuid");
const upsertNotification = async (input) => {
    let upsertObject = Object.assign(Object.assign({}, input), { id: (0, uuid_1.v4)() });
    await interfaces_1.Notifications.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertNotification;
