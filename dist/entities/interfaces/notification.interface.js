"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Notifications = (0, mongoose_1.model)('notifications', schema);
