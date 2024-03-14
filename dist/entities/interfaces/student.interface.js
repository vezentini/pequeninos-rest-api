"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    classId: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Students = (0, mongoose_1.model)('students', schema);
