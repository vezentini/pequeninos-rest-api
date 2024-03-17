"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../../entities/interfaces");
const findNotifications = async () => {
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
