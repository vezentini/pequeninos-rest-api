"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../entities/enums");
const interfaces_1 = require("../../entities/interfaces");
const accounts_1 = require("../accounts");
const findNotifications = async (input) => {
    let filter = {};
    if (input.profile === enums_1.ProfileTypes.PARENT) {
        filter = await (0, accounts_1.mapFilterStudents)(input);
    }
    const notificationsDb = await interfaces_1.Notifications.find();
    const notifications = notificationsDb.map((notification) => {
        return ({
            id: notification.id,
            title: notification.title,
            description: notification.description,
            photo: notification.photo
        });
    });
    return { notifications };
};
exports.default = findNotifications;
