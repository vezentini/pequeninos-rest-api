"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const helper_1 = require("../../helper");
const upsertNotification = async (input) => {
    let upsertObject = Object.assign({}, input);
    if (input.id === null) {
        upsertObject.id = (0, helper_1.generateNumberId)();
    }
    await interfaces_1.Notifications.updateOne({ id: upsertObject.id }, upsertObject, { upsert: true });
    return true;
};
exports.default = upsertNotification;
