"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        maxlength: 500,
        private: true
    },
    studentIds: {
        type: [String],
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Accounts = (0, mongoose_1.model)('accounts', schema);
